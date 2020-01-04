(this["webpackJsonpmodel-g"]=this["webpackJsonpmodel-g"]||[]).push([[0],{16:function(e,t,n){e.exports=n(25)},21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(14),l=n.n(c),o=(n(21),n(7)),s=n(8),r=n(11),u=n(9),p=n(12),m=n(26),d=n(27),h=n(28),E=n(29),y=n(30),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={selectedType:[],dichotomiesTable:[],functionsTable:[],types:[{type:"LII",functions:["Ti","Ni","Fi","Si","Ne","Fe","Se","Te"]},{type:"ILE",functions:["Ne","Te","Se","Fe","Ti","Si","Fi","Ni"]},{type:"SEI",functions:["Si","Fi","Ni","Ti","Fe","Ne","Te","Se"]},{type:"ESE",functions:["Fe","Se","Te","Ne","Si","Ti","Ni","Fi"]},{type:"LSI",functions:["Ti","Si","Fi","Ni","Se","Fe","Ne","Te"]},{type:"SLE",functions:["Se","Te","Ne","Fe","Ti","Ni","Fi","Si"]},{type:"IEI",functions:["Ni","Fi","Si","Ti","Fe","Se","Te","Ne"]},{type:"EIE",functions:["Fe","Ne","Te","Se","Ni","Ti","Si","Fi"]},{type:"ILI",functions:["Ni","Ti","Si","Fi","Te","Se","Fe","Ne"]},{type:"LIE",functions:["Te","Ne","Fe","Se","Ni","Fi","Si","Ti"]},{type:"ESI",functions:["Fi","Si","Ti","Ni","Se","Te","Ni","Fe"]},{type:"SEE",functions:["Se","Fe","Ne","Te","Fi","Ni","Ti","Si"]},{type:"SLI",functions:["Si","Ti","Ni","Fi","Te","Ne","Fe","Se"]},{type:"LSE",functions:["Te","Se","Fe","Ne","Si","Fi","Ni","Ti"]},{type:"EII",functions:["Fi","Ni","Ti","Si","Ne","Te","Si","Fe"]},{type:"IEE",functions:["Ne","Fe","Se","Te","Fi","Si","Ti","Ni"]}],dichotomies:[{dicho1:"external",dicho2:"internal",places:[[1,2,3,4],[5,6,7,8]],description1:"How you deal with the external world.",description2:"How you behave in close distance."},{dicho1:"values",dicho2:"tools",places:[[1,4,7,8],[2,3,5,6]],description1:"Long term motivation, accumulates problems, lack of energy.",description2:"Solves problems, excess energy."},{dicho1:"master",dicho2:"slave",places:[[1,2,5,8],[3,4,6,7]],description1:"Coordinates the type's activity, sends energy pulses.",description2:"Follows master, receives energy pulses."},{dicho1:"resistant",dicho2:"unstable",places:[[1,3,6,8],[2,4,5,7]],description1:"Works stably and systematically",description2:"Needs strong motivation to keep going."},{dicho1:"automatic",dicho2:"conscious",places:[[1,2,6,7],[3,4,5,8]],description1:"You aren't so aware of the judgements made by this function.",description2:"You are aware of the judgements made by this function."},{dicho1:"kinetic",dicho2:"potential",places:[[1,3,5,7],[2,4,6,8]],description1:"Consumes more energy than it accumulates. Does.",description2:"Accumulates energy. More prone to verbalizing instead of doing."},{dicho1:"accelerating",dicho2:"slowing",places:[[1,4,5,6],[2,3,7,8]],description1:"Energizes the type.",description2:"De-energizes the type."}]},n.state.selectedType=0,n.getFunctions=function(e,t,a){return e.places[a].map((function(e,a){return n.state.types[t].functions[e-1]+" "}))},n.showTypeFunctions=function(e){return i.a.createElement(m.a,{bordered:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{colspan:"4"},"Functions")),i.a.createElement("tr",null,i.a.createElement("th",null,"1"),i.a.createElement("th",null,"2"),i.a.createElement("th",null,"3"),i.a.createElement("th",null,"4"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,n.state.types[e].functions.slice(0,4).map((function(e){return i.a.createElement("td",null,e)}))),i.a.createElement("tr",null,n.state.types[e].functions.slice(4,8).map((function(e){return i.a.createElement("td",null,e)})))),i.a.createElement("tfoot",null,i.a.createElement("tr",null,i.a.createElement("th",null,"5"),i.a.createElement("th",null,"6"),i.a.createElement("th",null,"7"),i.a.createElement("th",null,"8"))))},n.showTypeDichotomies=function(e){return i.a.createElement(m.a,null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Functions"),i.a.createElement("th",{colspan:"2"},i.a.createElement("center",null,"Dichotomies")),i.a.createElement("th",null,"Functions"))),i.a.createElement("tbody",null,n.state.dichotomies.map((function(t,a){return i.a.createElement("tr",null,i.a.createElement("td",null,n.state.types[e].functions[t.places[0][0]-1]+" ",n.state.types[e].functions[t.places[0][1]-1],i.a.createElement("br",null),n.state.types[e].functions[t.places[0][2]-1]+" ",n.state.types[e].functions[t.places[0][3]-1]),i.a.createElement("td",null," ",i.a.createElement("b",null,t.dicho1)," ",i.a.createElement("br",null)," ",t.description1," "),i.a.createElement("td",null," ",i.a.createElement("b",null,t.dicho2)," ",i.a.createElement("br",null)," ",t.description2," "),i.a.createElement("td",null,n.state.types[e].functions[t.places[1][0]-1]+" ",n.state.types[e].functions[t.places[1][1]-1],i.a.createElement("br",null),n.state.types[e].functions[t.places[1][2]-1]+" ",n.state.types[e].functions[t.places[1][3]-1]))}))))},n.getInitialState=function(){return{selectedOption:0}},n.handleOptionChange=function(e){n.setState({selectedType:e.target.value,dichotomiesTable:n.showTypeDichotomies(e.target.value),functionsTable:n.showTypeFunctions(e.target.value)}),console.log(e.target.value)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-md-2"},i.a.createElement(d.a,null,i.a.createElement(h.a,null,i.a.createElement(E.a,{for:"Checkbox"},"Types"),i.a.createElement("div",null,this.state.types.map((function(t,n){return i.a.createElement(y.a,{type:"radio",id:n,value:n,label:t.type,checked:e.state.selectedType==n,onChange:e.handleOptionChange})})))))),i.a.createElement("div",{class:"col-md-8"},this.state.functionsTable,this.state.dichotomiesTable)))}}]),t}(a.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(24);l.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.26572424.chunk.js.map