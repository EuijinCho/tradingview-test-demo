(this["webpackJsonpcompare-chart"]=this["webpackJsonpcompare-chart"]||[]).push([[0],{46:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var a,i,r,o,c,s,l,u,d,b,h,v,p,f,m,x,j=n(0),y=n.n(j),g=n(31),O=n.n(g),C=(n(46),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),r(t),o(t)}))}),S=n(38),k=n(8),w=n.n(k),R=n(12),M=n(32),A=n(33),F=n(40),I=n(39),D=n(41),T=n(14),z=n.n(T),L=n(71),P=n(72),V=n(73),B=n(70),E=n(74),W=n(5),J=n(6),Y=n(2),$=J.a.div(a||(a=Object(W.a)(["\n    display: flex;\n    width: 100vw;\n    margin-top: 12px;\n"]))),q=J.a.div(i||(i=Object(W.a)(["\n    width: 70%;\n    max-width: 700px;\n    height: 500px;\n"]))),G=J.a.div(r||(r=Object(W.a)(["\n    width: 100%;\n    display: flex;\n"]))),H=J.a.div(o||(o=Object(W.a)(["\n    display: flex;\n    margin-right: 8px;\n    border: 1px solid;\n    padding: 4px;\n    height: 30px;\n\n    ","\n"])),(function(t){var e=t.title;return e?"\n        &::before {\n            content: '".concat(e,"';\n            margin-right: 4px;\n        }\n    "):""})),K=J.a.button(c||(c=Object(W.a)(["\n    height: 20px;\n"]))),N=J.a.div(s||(s=Object(W.a)(["\n    height: calc(100% - 30px);\n    position: relative;\n"]))),Q=J.a.div(l||(l=Object(W.a)(["\n    width: 100%;\n    height: 100%;\n    background: white;\n    top: 0;\n    left: 0;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 100;\n"]))),U=J.a.div(u||(u=Object(W.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    max-width: 300px;\n"]))),X=J.a.div(d||(d=Object(W.a)(["\n    display: flex;\n    width: 100%;\n    margin-bottom: 20px;\n"]))),Z=J.a.button(b||(b=Object(W.a)(["\n    width: 50px;\n    height: 50px;\n    ","\n"])),(function(t){return t.disabled?"\n        pointer-events: none;\n        opacity: 0.7;\n    ":""})),_=J.a.div(h||(h=Object(W.a)([""]))),tt=J.a.div(v||(v=Object(W.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n"]))),et=J.a.div(p||(p=Object(W.a)(["\n    width: 100%;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid black;\n"]))),nt=J.a.button(f||(f=Object(W.a)(["\n    width: 40px;\n    height: 20px;\n    margin-left: 12px;\n"]))),at=J.a.div(m||(m=Object(W.a)(["\n    background: rgba(0,0,0,0.3);\n    width: 220px;\n    padding: 4px;\n    display: none;\n    border-radius: 4px;\n    position: absolute;\n    top: 10px;\n    left: 0px;\n    z-index: 10;\n    pointer-events: none;\n"]))),it=J.a.div(x||(x=Object(W.a)(["\n    width: 100%;\n    color: black;\n\n    ","\n"])),(function(t){var e=t.color,n=t.removed;return"\n        color: ".concat(e,";\n        display: ").concat(n?"none":"flex",";\n    ")})),rt=function(t){var e=t.setRef,n=t.setTooltipRef,a=t.ranges,i=t.intervals,r=t.state,o=r.symbol,c=r.symbols,s=r.loading,l=r.charts,u=(r.mouseOut,t.onAddSymbolClick),d=t.onRemoveSymbolClick,b=t.onResetClick,h=t.onRangeClick,v=t.onIntervalClick,p=l.filter((function(t){return!t.removed})),f=l.map((function(t){return t.symbol}));return Object(Y.jsxs)($,{children:[Object(Y.jsxs)(q,{children:[Object(Y.jsxs)(G,{children:[Object(Y.jsx)(H,{children:Object(Y.jsx)(K,{onClick:b,children:"Reset"})}),Object(Y.jsx)(H,{title:"range",children:a.map((function(t,e){var n=t.text,a=t.value,i=t.sub;return Object(Y.jsx)(K,{onClick:h({value:a,sub:i}),children:n},"r"+e)}))}),Object(Y.jsx)(H,{title:"interval",children:i.map((function(t,e){var n=t.text,a=t.value,i=t.sub,r=t.barSpacing;return Object(Y.jsx)(K,{onClick:v({value:a,sub:i,barSpacing:r}),children:n},"i"+e)}))})]}),Object(Y.jsxs)(N,{id:"chart-canvas",ref:e,children:[s?Object(Y.jsx)(Q,{children:"loading..."}):null,Object(Y.jsx)(at,{ref:n,children:l.map((function(t,e){return Object(Y.jsx)(it,{text:t.symbol,removed:t.removed,color:t.color},"tti"+e)}))})]})]}),Object(Y.jsxs)(U,{children:["symbol \ucd94\uac00",Object(Y.jsx)(X,{children:c.map((function(t,e){return Object(Y.jsx)(Z,{disabled:f.includes(t),onClick:u(t),children:t},"sab"+e)}))}),Object(Y.jsxs)(_,{children:["Symbol Compare",Object(Y.jsx)(tt,{children:p.map((function(t,e){return Object(Y.jsxs)(et,{style:{color:t.color},children:[Object(Y.jsx)("div",{style:{width:"50px"},children:t.symbol}),t.symbol!==o?Object(Y.jsx)(nt,{onClick:d(t.symbol),children:"\uc0ad\uc81c"}):null]},"csl"+e)}))})]})]})]})},ot=n(37),ct=n.n(ot),st=function(t){return ct.a.get(t,{headers:{"Content-Type":"application/json"}}).then((function(t){return t.data}))},lt=function(){var t=Object(R.a)(w.a.mark((function t(e){var n,a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,st("https://euijincho.github.io/tradingview-test-demo/series/".concat(e,".json"));case 2:return n=t.sent,a=n.historical,t.abrupt("return",a.map((function(t){return{time:t.date,value:t.adjClose}})).reverse());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ut=function(t){Object(F.a)(n,t);var e=Object(I.a)(n);function n(t){var a;return Object(M.a)(this,n),(a=e.call(this,t)).intialize=Object(R.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.chartCanvasRef){t.next=2;break}return t.abrupt("return");case 2:a.chart=Object(D.a)(a.chartCanvasRef,{width:a.chartCanvasRef.clientWidth,localization:{dateFormat:"yyyy-MM-dd"},priceScale:{mode:2,autoScale:!0,scaleMargins:{top:.2,bottom:.25}}}),a.chart.subscribeCrosshairMove((function(t){t.time;var e=t.point,n=t.seriesPrices,i=a.state.charts;if(e&&0!==n.size){var r=Array.from(a.tootipCanvasRef.children);i.forEach((function(t,e){var i=t.symbol,o=t.series,c=t.removed,s=t.data,l=r[e];if(o&&!c&&l){var u=a.chart.timeScale().getVisibleRange().from,d=n.get(o),b=s.find((function(t){var e=t.time,n=e.day,a=e.month,i=e.year;return u.day===n&&u.month===a&&u.year===i})).value,h=100*(d-b)/b;l.innerText="".concat(i,": $").concat(d.toFixed(2),", ").concat(h.toFixed(2),"%")}}));var o=e.x,c=a.tootipCanvasRef.clientWidth,s=a.chart.options().width-a.chart.priceScale().width(),l=o-c/2,u=Math.min(s-c,l),d=Math.max(0,u);a.tootipCanvasRef.style.left=d+"px",a.tootipCanvasRef.style.display="block"}else a.tootipCanvasRef.style.display="none"})),a.setSymbols(),a.setSeries(a.state.symbol),setTimeout((function(){a.chart.timeScale().fitContent(),a.setState({loading:!1})}),300);case 7:case"end":return t.stop()}}),t)}))),a.setSymbols=Object(R.a)(w.a.mark((function t(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,st("https://euijincho.github.io/tradingview-test-demo/symbols/list.json");case 2:e=t.sent,a.setState({symbols:e});case 4:case"end":return t.stop()}}),t)}))),a.setSeries=function(){var t=Object(R.a)(w.a.mark((function t(e){var n,i,r,o,c,s,l,u;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.state.charts,i=n.findIndex((function(t){var n=t.symbol;return e===n})),r=n.findIndex((function(t){return t.removed})),!(!e||r<0||!a.chart||i>=0)){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,lt(e);case 7:o=t.sent,c=n.splice(r,1),s=Object(S.a)(c,1),l=s[0].color,(u=a.chart.addLineSeries({lastValueVisible:!1,color:l})).setData(o),n.push({symbol:e,color:l,series:u,data:o,removed:!1}),a.setState({charts:n});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.onAddSymbolClick=function(t){return function(){a.setSeries(t)}},a.onRemoveSymbolClick=function(t){return function(){var e=a.state.charts.map((function(e){return e.symbol===t&&a.chart?(a.chart.removeSeries(e.series),{symbol:"",series:void 0,removed:!0,data:[],color:e.color}):e}));a.setState({charts:e})}},a.onRangeClick=function(t){var e=t.value,n=t.sub;return function(){a.chart.timeScale().setVisibleRange({from:z()(a.lastDate).subtract(e,n).unix(),to:z()(a.lastDate).unix()})}},a.onIntervalClick=function(t){var e=t.value,n=t.sub,i=t.barSpacing;return function(){a.state.charts.forEach((function(t){var i=t.data,r=t.series;if(r){var o=a.getFilteredSeries({data:i,value:e,sub:n});r.setData(o)}})),i&&a.chart.applyOptions({timeScale:{barSpacing:i}})}},a.getFilteredSeries=function(t){var e,n=t.data,a=void 0===n?[]:n,i=t.value,r=t.sub;return Object(L.a)(Object(P.a)(V.a),B.a,Object(E.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.time,a=n.day,o=n.month,c=n.year,s="".concat(c,"-").concat(o,"-").concat(a),l=z()(s);return e=e||l,!!l.isSameOrBefore(e)&&(e=e.subtract(i,r),!0)})),B.a)(a)},a.chartCanvasRef=null,a.tootipCanvasRef=null,a.chart=null,a.defaultSymbol="AAPL",a.lastDate=z()("2021-07-15"),a.ranges=[{text:"1Month",value:1,sub:"months"},{text:"6Month",value:6,sub:"months"},{text:"1Year",value:12,sub:"months"}],a.intervals=[{text:"1Day",value:1,sub:"days",barSpacing:6},{text:"1Week",value:7,sub:"days",barSpacing:13},{text:"1Month",value:30,sub:"days",barSpacing:30}],a.state={ranges:null,symbols:[],symbol:"AAPL",loading:!0,interval:1,charts:[{symbol:"",color:"red",series:void 0,data:[],removed:!0},{symbol:"",color:"green",series:void 0,data:[],removed:!0},{symbol:"",color:"blue",series:void 0,data:[],removed:!0},{symbol:"",color:"black",series:void 0,data:[],removed:!0},{symbol:"",color:"fuchsia",series:void 0,data:[],removed:!0}]},a}return Object(A.a)(n,[{key:"componentDidMount",value:function(){this.intialize()}},{key:"render",value:function(){var t=this;return Object(Y.jsx)(rt,{setRef:function(e){return t.chartCanvasRef=e},setTooltipRef:function(e){return t.tootipCanvasRef=e},ranges:this.ranges,intervals:this.intervals,state:this.state,onAddSymbolClick:this.onAddSymbolClick,onRemoveSymbolClick:this.onRemoveSymbolClick,onResetClick:function(){t.setState({loading:!0}),t.onIntervalClick(t.intervals[0])(),setTimeout((function(){t.chart.timeScale().fitContent(),t.setState({loading:!1})}),100)},onRangeClick:this.onRangeClick,onIntervalClick:this.onIntervalClick})}}]),n}(y.a.Component);O.a.render(Object(Y.jsx)(y.a.StrictMode,{children:Object(Y.jsx)(ut,{})}),document.getElementById("root")),C()}},[[68,1,2]]]);
//# sourceMappingURL=main.f9602f78.chunk.js.map