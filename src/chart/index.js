import React from 'react';
import { createChart } from 'lightweight-charts';
import moment from 'moment';
import { pipe, reverse, filter, map, clone  } from 'ramda';

import Presenter from './presenter';

import { getSeries, getSymbols } from '../api';


class Chart extends React.Component {

    constructor(props) {
        super(props);

        this.chartCanvasRef = null;
        this.tootipCanvasRef = null;
        this.chart = null;
        this.defaultSymbol = 'AAPL';
        this.lastDate = moment('2021-07-15');
        this.ranges = [
            { text: '1Month', value: 1, sub: 'months' },
            { text: '6Month', value: 6, sub: 'months' },
            { text: '1Year', value: 12, sub: 'months' }
        ];
        this.intervals = [
            { text: '1Day', value: 1, sub: 'days', barSpacing: 6 },
            { text: '1Week', value: 7, sub: 'days', barSpacing: 13 },
            { text: '1Month', value: 30, sub: 'days', barSpacing: 30 }
        ];

        this.state = {
            ranges: null,
            symbols: [],
            symbol: 'AAPL',
            loading: true,
            interval: 1,
            charts: [
                { symbol: '', color: 'red', series: undefined, data: [], removed: true },
                { symbol: '', color: 'green', series: undefined, data: [], removed: true },
                { symbol: '', color: 'blue', series: undefined, data: [], removed: true },
                { symbol: '', color: 'black', series: undefined, data: [], removed: true },
                { symbol: '', color: 'fuchsia', series: undefined, data: [], removed: true }
            ]
        };
    }

    componentDidMount() {
        this.intialize();
    }

    intialize = async () => {
        if (!this.chartCanvasRef) return;

        this.chart = createChart(this.chartCanvasRef,{
            width: this.chartCanvasRef.clientWidth,
            localization: {
                dateFormat: 'yyyy-MM-dd'
            },
            priceScale: { 
                mode: 2,
                autoScale: true,
                scaleMargins: {
                    top: 0.20,
                    bottom: 0.25,
                }
            }           
        });

        this.chart.subscribeCrosshairMove(({time, point, seriesPrices}) => {
            const { charts } = this.state;
            if (!point || (seriesPrices.size === 0)) {
                this.tootipCanvasRef.style.display = 'none';
      
                return;
            }

            const tooltips = Array.from(this.tootipCanvasRef.children);
            charts.forEach(({symbol,series,removed,data},i) => {
                const tooltip = tooltips[i];

                if (!series || removed || !tooltip) return;

                const { from } = this.chart.timeScale().getVisibleRange();
                const value = seriesPrices.get(series);
                const { value: initValue } = data.find(({time: { day,month,year} }) => (from.day === day) && (from.month === month) && (from.year === year));
                const percent = ((value - initValue) * 100 / initValue);
                
                tooltip.innerText = `${symbol}: $${value.toFixed(2)}, ${percent.toFixed(2)}%`;
            });

            const { x } = point;
            const tooltipsWidth = this.tootipCanvasRef.clientWidth;
            const chartAreaWidth = this.chart.options().width - this.chart.priceScale().width();
            const tooltipX = x-(tooltipsWidth/2);
            
            const minX = 0;
            const maxX = Math.min(chartAreaWidth-tooltipsWidth,tooltipX)
            const left = Math.max(minX,maxX);

            this.tootipCanvasRef.style.left = left + 'px';
            this.tootipCanvasRef.style.display = 'block';
        });

        this.setSymbols();
        this.setSeries(this.state.symbol);

        setTimeout(() => {
            this.chart.timeScale().fitContent();
            this.setState({loading: false});
        },300)
    }

    setSymbols = async () => {
        const symbols = await getSymbols();

        this.setState({symbols});
    }

    setSeries = async (symbol) => {
        const { charts } = this.state;
        const isSameSymbol = charts.findIndex(({symbol: s}) => symbol === s);
        const setSeriesIndex = charts.findIndex(({removed}) => removed);
        if (!symbol || setSeriesIndex < 0 || !this.chart || isSameSymbol >= 0) return; 
        
        const series = await getSeries(symbol);
        const [ { color } ] = charts.splice(setSeriesIndex,1);
        const lineSeries = this.chart.addLineSeries({ lastValueVisible: false, color });
        lineSeries.setData(series);

        charts.push({ symbol, color, series: lineSeries, data: series, removed: false });

        this.setState({charts});
    }

    onAddSymbolClick = (symbol) => () => {
        this.setSeries(symbol);
    }

    onRemoveSymbolClick = (symbol) => () => {
        const { charts } = this.state;
        const updateCharts = charts.map((d) => {
            if (d.symbol === symbol && this.chart) {
                this.chart.removeSeries(d.series);

                return { symbol: '', series: undefined, removed: true, data: [], color: d.color };
            }

            return d;
        })

        this.setState({charts: updateCharts});
    }

    onRangeClick = ({value,sub}) => () => {
        this.chart.timeScale().setVisibleRange({
            from: moment(this.lastDate).subtract(value,sub).unix(),
            to: moment(this.lastDate).unix()
        })
    }

    onIntervalClick = ({value,sub,barSpacing}) => () => {
        const { charts } = this.state;

        charts.forEach(({data,series}) => {
            if (series) {
                const filteredData = this.getFilteredSeries({data, value, sub});
                series.setData(filteredData);
            }
        })

        if (barSpacing) {
            this.chart.applyOptions({
                timeScale: {
                    barSpacing
                }
            })
        }
    }

    getFilteredSeries = ({data=[],value,sub}) => {
        let nextFilterDate;
    
        return pipe(
            map(clone),
            reverse,
            filter(({time: { day, month, year }} = {}) => {
                const time = `${year}-${month}-${day}`;
                const date = moment(time);
                nextFilterDate = nextFilterDate || date;
        
                if (date.isSameOrBefore(nextFilterDate)) {
                    nextFilterDate = nextFilterDate.subtract(value,sub);
        
                    return true;
                }
        
                return false;
            }),
            reverse
        )(data)
    };

    

    render() {
        return (
            <Presenter
                setRef={(ref) => this.chartCanvasRef = ref}
                setTooltipRef={(ref) => this.tootipCanvasRef = ref}
                ranges={this.ranges}
                intervals={this.intervals}
                state={this.state}
                onAddSymbolClick={this.onAddSymbolClick}
                onRemoveSymbolClick={this.onRemoveSymbolClick}
                onResetClick={() => {
                    this.setState({loading: true});

                    this.onIntervalClick(this.intervals[0])();

                    setTimeout(() => {
                        this.chart.timeScale().fitContent();
                        this.setState({loading: false});
                    },100);
                }}
                onRangeClick={this.onRangeClick}
                onIntervalClick={this.onIntervalClick}
            />
        )
    }

}

export default Chart;