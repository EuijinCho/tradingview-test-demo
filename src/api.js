import axios from 'axios';


const request = (url) => {
    return axios
    .get(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(({data}) => data);
};

const getSymbols = () => request('https://euijincho.github.io/tradingview-test/symbols/list.json');
const getSeries = async (symbol) => {
    const { historical } = await request(`https://euijincho.github.io/tradingview-test/series/${symbol}.json`);
    return historical.map(({ date, adjClose }) => ({ time: date, value: adjClose })).reverse();
}


export default request;
export { getSymbols, getSeries };