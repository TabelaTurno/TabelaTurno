(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(35)},23:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),F=n.n(a),r=n(15),o=n.n(r),i=n(41),l=n(38),c=n(40),s=n(39),u=(n(23),n(3)),h=n(4),d=n(7),p=n(5),f=n(8),m=(n(25),864e5);var g=[];g.Teste4=" A B C D\n  8 8 8 F\n  8 8 F 8\n  8 F 8 8\n  F 8 8 8\n  8 8 8 8",g.Refap23=" G1 G2 G3 G4 G5\n  23 7 F 15 F\n  23 7 F 15 F\n  23 F 7 15 F\n  23 15 7 F F\n  F 15 7 F 23\n  F 15 7 F 23\n  7 15 F F 23\n  7 F 15 23 F\n  7 F 15 23 F\n  F F 15 23 7\n  15 F F 23 7\n  15 23 F F 7\n  15 23 F F 7\n  15 23 F 7 F\n  F F 23 7 15\n  F F 23 7 15\n  F 7 23 F 15\n  F 7 23 15 F\n  23 7 F 15 F\n  23 7 F 15 F\n  23 F 7 15 F\n  F 15 7 F 23\n  F 15 7 F 23\n  7 15 F F 23\n  7 F 15 F 23\n  7 F 15 23 F\n  7 F 15 23 F\n  F F 15 23 7\n  15 23 F F 7\n  15 23 F F 7\n  15 23 F 7 F\n  F 23 F 7 15\n  F F 23 7 15\n  F F 23 7 15\n  F 7 23 F 15",g.Refap0=" G1 G2 G3 G4 G5\n  F 8 0 16 F\n  0 8 F 16 F\n  0 F 8 16 F\n  0 16 8 F F\n  0 16 8 F F\n  F 16 8 F 0\n  8 16 F F 0\n  8 F 16 F 0\n  8 F 16 0 F\n  F F 16 0 8\n  16 F F 0 8\n  16 F F 0 8\n  16 0 F F 8\n  16 0 F 8 F\n  F 0 F 8 16\n  F F 0 8 16\n  F 8 0 F 16\n  F 8 0 16 F\n  F 8 0 16 F\n  0 8 F 16 F\n  0 F 8 16 F\n  0 16 8 F F\n  F 16 8 F 0\n  8 16 F F 0\n  8 F 16 F 0\n  8 F 16 F 0\n  8 F 16 0 F\n  F F 16 0 8\n  16 F F 0 8\n  16 0 F F 8\n  16 0 F 8 F\n  F 0 F 8 16\n  F 0 F 8 16\n  F F 0 8 16\n  F 8 0 F 16",g.Reduc23="I II III IV V\n  15 7 F F 23\n  15 F 7 F 23\n  15 23 7 F F\n  F 23 7 15 F\n  7 F 23 15 F\n  7 F 23 15 F\n  7 F 23 15 F\n  7 F F 23 15\n  F 7 F 23 15\n  23 7 F F 15\n  23 7 15 F F\n  F 23 15 F 7\n  F 23 15 F 7\n  F 23 15 F 7\n  F F 23 15 7\n  7 F 23 15 F\n  7 F F 15 23\n  7 15 F F 23\n  23 15 F 7 F\n  23 15 F 7 F\n  23 15 F 7 F\n  F 23 15 7 F\n  F 23 15 F 7\n  F F 15 23 7\n  15 F F 23 7\n  15 F 7 F 23\n  15 F 7 F 23\n  15 F 7 F 23\n  23 15 7 F F\n  23 15 F 7 F\n  F 15 23 7 F\n  F F 23 7 15\n  F 7 F 23 15\n  F 7 F 23 15\n  F 7 F 23 15";var y={tableName:"Refap",tableLink:"refap23",firstDay:"2018-08-01",firstDayJS:"",groups:"",daysLines:"",populateTableDate:function(e){e||(e="Refap23"),this.tableData=g[e];var t=this.tableData.replace(/^\s+/g,"").split("\n").map(function(e,t){return e.replace(/^\s+/g,"").split(" ")});this.groups=t[0],t.splice(0,1),this.daysLines=t;var n=this.firstDay.split("-");return this.firstDayJS=new Date(n[0],n[1]-1,n[2]),console.log(this.firstDayJS)},getDayScales:function(e){var t={day:"",groups:"",schedule:""},n=this.daysLines.length,a=function(e,t){var n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),a=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.floor((a-n)/m)}(this.firstDayJS,e)/n,F=(a-Math.floor(a)).toFixed(6)*n,r=Math.round(F);return t.day=e,t.groups=this.groups,t.schedule=this.daysLines[r],t},getMonthScales:function(e){for(var t=[],n=e.getMonth(),a=e.getFullYear(),F=new Date(a,n+1,0).getDate(),r=1;r<=F;r++){var o=new Date(a,n,r,8,0,0),i=this.getDayScales(o);t.push(i)}return t}},v=n(10),b=!1;b||v.a.initialize("UA-92630735-3");Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};var D=["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"],w=function(e){return["F",0,6].includes(e)?"tdF":""},E=function(e){return function(e,t){return e.getDate()==t.getDate()&&e.getMonth()==t.getMonth()&&e.getFullYear()==t.getFullYear()}(e,new Date)?"tdToday":""},k=function(e){return e.map(function(e,t){return F.a.createElement("tr",{key:t,className:[(n=e.day,{0:"trSunday",1:"trMonday",2:"trTuesday",3:"trWednesday",4:"trThursday",5:"trFriday",6:"trSaturday"}[n.getDay()]),"trTable"].join(" ")},F.a.createElement("td",{key:t,className:["tdDate",E(e.day)].join(" ")}," ",e.day.toLocaleDateString("pt",{day:"2-digit",month:"short"}).replace(" de ","/")),function(e){var t=e.getDay(),n=D[t].toUpperCase();return F.a.createElement("td",{className:[w(t),"tdWeekCol"].join(" ")},n)}(e.day),function(e){return e.schedule.map(function(e,t){return F.a.createElement("td",{key:t,className:w(e)},e)})}(e));var n})},T=function(e){return F.a.createElement("tr",{className:"trHead"},(t=e[0].day,F.a.createElement("th",{className:"tdDate"},t.getFullYear())),F.a.createElement("th",null),e[0].groups.map(function(e,t){return F.a.createElement("th",{key:t},e)}));var t},O=function(e){return[T(e),k(e)]};function M(){var e=window.pageYOffset,t=window.innerHeight,n=document.body.offsetHeight;return Math.max(n-(e+t),0)}document.addEventListener("scroll",function(){M()});var j=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).props,F=(a.month,a.tabela);y.populateTableDate(F);var r=new Date,o=y.getMonthScales(r),i=new Date(r.getFullYear(),r.getMonth()-1,1),l=y.getMonthScales(i);return n.state={tableInput:F,dayOne:r,actualDay:r,monthsTRs:[O(l),O(o)]},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"tick",value:function(){var e=this.state.actualDay,t=new Date(e.getFullYear(),e.getMonth()+1,1,8,0,0),n=y.getMonthScales(t),a=this.state.monthsTRs;a.push(O(n)),this.setState({actualDay:t,monthsTRs:a});var F,r,o,i=e.getFullYear()+"-"+(e.getMonth()+1);console.log(i),F="Navigation",r=i,o="Version2",!b&&v.a.event({category:F,action:r,label:o})}},{key:"componentDidMount",value:function(){var e=this.tick.bind(this);document.addEventListener("scroll",function(){var t=M();t>0&&t<=1400&&e()});setTimeout(function(){e();var t=document.getElementsByClassName("tdToday");t.length>0&&window.scrollTo(0,t[0].offsetTop-88)},100)}},{key:"render",value:function(){return F.a.createElement("table",{className:"tbMain"},(e=this.state.monthsTRs,F.a.createElement("tbody",null,e)));var e}}]),t}(F.a.Component),S=(n(28),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,F=new Array(a),r=0;r<a;r++)F[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(F)))).state={tabelaName:"Refap23"},n.handleClick=function(e){var t="Refap23"===n.state.tabelaName?"Teste4":"Refap23";n.setState({tabelaName:t})},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.tabelaName;return F.a.createElement("div",{className:"App"},F.a.createElement("div",{style:{width:"100%",height:"100%",position:"fixed",background:"#FFF",textalign:"center",paddingTop:"0px"}},"http://tabelaturno.github.io",F.a.createElement("br",null)," Obrigado pela prefer\xeancia! \u263a  "),F.a.createElement(j,{month:"7",tabela:e}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N,R=Object(c.a)((N=function(){return F.a.createElement(i.a,null,F.a.createElement(l.a,{path:"/about",render:function(){return F.a.createElement("div",null,"ABOUT")}}),F.a.createElement(l.a,{exact:!0,path:"/",component:function(){return F.a.createElement(S,null)}}))},function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,F=new Array(a),r=0;r<a;r++)F[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(F)))).trackPage=function(e){b||(v.a.set({page:e}),v.a.pageview(e))},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname;this.trackPage(e)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.location.pathname,n=e.location.pathname;t!==n&&this.trackPage(n)}},{key:"render",value:function(){return F.a.createElement(N,this.props)}}]),t}(F.a.Component)));o.a.render(F.a.createElement(function(){return F.a.createElement(s.a,{basename:"/TabelaTurno"},F.a.createElement(R,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.cd780732.chunk.js.map