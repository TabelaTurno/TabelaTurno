(this.webpackJsonpTabelaTurno=this.webpackJsonpTabelaTurno||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),c=a(10),i=a(12),s=(a(29),a(2)),u=a(3),m=a(5),h=a(4),F=a(23);function d(e,t){var a=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.floor((n-a)/864e5)}var p=[];p.Teste4=" A B C D\n  8 8 8 F\n  8 8 F 8\n  8 F 8 8\n  F 8 8 8\n  8 8 8 8",p.Refap=" G1 G2 G3 G4 G5\nF F 23 7 15\nF 7 23 F 15\nF 7 23 15 F\n23 7 F 15 F\n23 7 F 15 F\n23 F 7 15 F\nF 15 7 F 23\nF 15 7 F 23\n7 15 F F 23\n7 F 15 F 23\n7 F 15 23 F\n7 F 15 23 F\nF F 15 23 7\n15 23 F F 7\n15 23 F F 7\n15 23 F 7 F\nF 23 F 7 15\nF F 23 7 15\nF F 23 7 15\nF 7 23 F 15\n  23 7 F 15 F\n  23 7 F 15 F\n  23 F 7 15 F\n  23 15 7 F F\n  F 15 7 F 23\n  F 15 7 F 23\n  7 15 F F 23\n  7 F 15 23 F\n  7 F 15 23 F\n  F F 15 23 7\n  15 F F 23 7\n  15 23 F F 7\n  15 23 F F 7\n  15 23 F 7 F\n  F F 23 7 15",p.Refap0=" G1 G2 G3 G4 G5\n  F F 0 8 16\n  F 8 0 F 16\n  F 8 0 16 F\n  F 8 0 16 F\n  0 8 F 16 F\n  0 F 8 16 F\n  0 16 8 F F\n  F 16 8 F 0\n  8 16 F F 0\n  8 F 16 F 0\n  8 F 16 F 0\n  8 F 16 0 F\n  F F 16 0 8\n  16 F F 0 8\n  16 0 F F 8\n  16 0 F 8 F\n  F 0 F 8 16\n  F 0 F 8 16\n  F F 0 8 16\n  F 8 0 F 16\n    F 8 0 16 F\n    0 8 F 16 F\n    0 F 8 16 F\n    0 16 8 F F\n    0 16 8 F F\n    F 16 8 F 0\n    8 16 F F 0\n    8 F 16 F 0\n    8 F 16 0 F\n    F F 16 0 8\n    16 F F 0 8\n    16 F F 0 8\n    16 0 F F 8\n    16 0 F 8 F\n    F 0 F 8 16";var f={tableName:"Refap",tableLink:"refap23",firstDay:"2020-01-23",firstDayJS:"",groups:"",daysLines:"",daysLines12Transition:[["F","F","7","19","F"],["F","F","F","19","7"],["19","F","F","F","7"],["19","F","F","F","7"],["19","7","F","F","F"],["F","7","19","F","F"],["F","7","19","F","F"],["F","F","19","7","F"],["F","F","F","7","19"],["F","F","F","7","19"],["7","F","F","F","19"],["7","19","F","F","F"],["7","19","F","F","F"],["F","19","7","F","F"],["F","F","7","19","F"]],populateTableDate:function(e){e||(e="Refap"),this.tableName=e,this.tableData=p[e];var t=this.tableData.replace(/^\s+/g,"").split("\n").map((function(e,t){return e.replace(/^\s+/g,"").split(" ")}));this.groups=t[0],t.splice(0,1),this.daysLines=t;var a=this.firstDay.split("-");return this.firstDayJS=new Date(a[0],a[1]-1,a[2]),console.log(this.firstDayJS)},getDayScales:function(e){var t={day:"",groups:"",schedule:""};t.day=e,t.groups=this.groups;var a=new Date(new Date(2021,9,1).setHours(12,0,0,0));if(e.getTime()===a.getTime())"Refap"===this.tableName?t.schedule=["\ud83d\udea923\ud83c\udfc1","\ud83d\udea915\ud83c\udfc1","\ud83d\udea9F\ud83c\udfc1","\ud83d\udea9F\ud83c\udfc1","\ud83d\udea97\ud83c\udfc1"]:t.schedule=["\ud83d\udea9F\ud83c\udfc1","\ud83d\udea916\ud83c\udfc1","\ud83d\udea9F\ud83c\udfc1","\ud83d\udea9F\ud83c\udfc1","\ud83d\udea98\ud83c\udfc1"];else if(e.getTime()>a.getTime()){var n=d(this.firstDayJS,e)%this.daysLines.length;t.schedule=this.daysLines[n]}else{var r=d(this.firstDayJS,e)%this.daysLines12Transition.length;t.schedule=this.daysLines12Transition[r]}return t},getMonthScales:function(e){for(var t=[],a=e.getMonth(),n=e.getFullYear(),r=new Date(n,a+1,0).getDate(),l=1;l<=r;l++){var o=new Date(n,a,l,12,0,0),c=this.getDayScales(o);t.push(c)}return t}},g=a(13);g.a.initialize("UA-92630735-3");var v=function(e,t,a){return g.a.event({category:e,action:t,label:a})};Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};var b=["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"],y=function(e){return["F",0,6].includes(e)?"tdF":""},w=function(e){return function(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(e,new Date)?"tdToday":""},E=function(e){return console.log("Click:"+e),v("Click",e,"label2"),!0};var k=function(e){return e.map((function(e,t){return r.a.createElement("th",{key:t,onClick:function(){!function(e,t){document.querySelectorAll(".tdDayCol"+e).forEach((function(e){e.classList.toggle("backSelected")})),E("Grupo "+t)}(t,e)}},e)}))},C=function(e){return e.map((function(e,t){return r.a.createElement("tr",{key:t,className:[(a=e.day,{0:"trSunday",1:"trMonday",2:"trTuesday",3:"trWednesday",4:"trThursday",5:"trFriday",6:"trSaturday"}[a.getDay()]),"trTable"].join(" ")},r.a.createElement("td",{key:t,className:["tdDate",w(e.day)].join(" ")}," ",e.day.toLocaleDateString("pt",{day:"2-digit",month:"short"}).replace(" de ","/").replace(".","")),function(e){var t=e.getDay(),a=b[t].toUpperCase();return r.a.createElement("td",{className:[y(t),"tdWeekCol"].join(" ")},a)}(e.day),function(e){return e.schedule.map((function(e,t){return r.a.createElement("td",{key:t,className:["tdDayCol"+t,y(e)].join(" ")},e)}))}(e));var a}))},T=function(e){return r.a.createElement("tr",{className:"trHead"},(t=e[0].day,r.a.createElement("th",{className:"tdDate",onClick:function(){return E("Ano"+t.getFullYear())}},t.getFullYear())),r.a.createElement("th",null,"\xa0"),k(e[0].groups));var t},O=function(e){return[T(e),C(e)]};var D=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).initTableComponent(),n}return Object(u.a)(a,[{key:"initTableComponent",value:function(){var e=this.props.tableName;f.populateTableDate(e);var t=new Date((new Date).setHours(12,0,0,0)),a=f.getMonthScales(t),n=new Date(t.getFullYear(),t.getMonth()-1,1),r=f.getMonthScales(n);this.state={tableInput:e,dayOne:t,actualDay:t,monthsTRs:[O(r),O(a)]}}},{key:"tick",value:function(){var e=this.state.actualDay,t=new Date(e.getFullYear(),e.getMonth()+1,1),a=f.getMonthScales(t);this.setState({monthsTRs:[].concat(Object(F.a)(this.state.monthsTRs),[O(a)]),actualDay:t});var n=e.getFullYear()+"-"+(e.getMonth()+1);console.log(n),v("Navigation",n,"label3")}},{key:"handleScroll",value:function(){var e=function(){var e=window.pageYOffset,t=window.innerHeight,a=document.body.offsetHeight;return Math.max(a-(e+t),0)}();e>0&&e<=1400&&this.tick.bind(this)()}},{key:"componentDidMount",value:function(){var e=this.props.groupSelected;if(void 0!==e){var t="//th[text()='"+e+"']",a=document.evaluate(t,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;a.click(),console.log("Mathing"),console.log(a)}document.addEventListener("scroll",this.handleScroll.bind(this));setTimeout((function(){window.scrollTo(0,document.getElementsByClassName("tdToday")[0].offsetTop-135)}),50);this.tick.bind(this)()}},{key:"componentDidUpdate",value:function(e){this.props.tableName!==e.tableName&&(this.initTableComponent(),this.tick.bind(this)())}},{key:"render",value:function(){return r.a.createElement("table",{className:"tbMain"},(e=this.state.monthsTRs,r.a.createElement("tbody",null,e)));var e}}]),a}(r.a.Component),M=a(14),S=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(s.a)(this,a),n=t.call(this,e);var r=window.localStorage.getItem("AppTheme"),l=null==r?"":r;return n.state={AppTheme:l},n}return Object(u.a)(a,[{key:"handleTheme",value:function(){""===this.state.AppTheme?this.setState({AppTheme:"themeBlack"},(function(){document.body.classList.add("themeBlack"),window.localStorage.setItem("AppTheme","themeBlack")})):this.setState({AppTheme:""},(function(){document.body.classList.remove("themeBlack"),window.localStorage.setItem("AppTheme","")}))}},{key:"handleClickTheme",value:function(){this.handleTheme.bind(this)()}},{key:"render",value:function(){var e=""===this.state.AppTheme?"escuro":"claro";return r.a.createElement("div",{className:this.props.className,onClick:this.handleClickTheme.bind(this)},"Tema ",e)}}]),a}(r.a.Component);a(32);var j=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a),e=t.call(this);var n=null==window.localStorage.getItem("numVisitCounter")?0:window.localStorage.getItem("numVisitCounter");return e.state={showMenu:!1,numVisitCounter:n},e.showMenu=e.showMenu.bind(Object(M.a)(e)),e.closeMenu=e.closeMenu.bind(Object(M.a)(e)),e}return Object(u.a)(a,[{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({numVisitCounter:1*this.state.numVisitCounter+1}),window.localStorage.setItem("numVisitCounter",this.state.numVisitCounter),this.setState({showMenu:!0},(function(){document.addEventListener("click",t.closeMenu)})),v("Click","CardMenuIconClick","label2")}},{key:"closeMenu",value:function(e){var t=this;if("undefined"!==typeof this.dropdownMenu){if(null==this.dropdownMenu)return!0;var a=e.target;this.dropdownMenu.contains(a)||this.setState({showMenu:!1},(function(){document.removeEventListener("click",t.closeMenu)}))}}},{key:"handleSelectTable",value:function(e,t){v("Click","CardMenu"+t+"Click","label2"),this.closeMenu.bind(this)(this)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"buttonCardMenu",onClick:this.showMenu},r.a.createElement("svg",{id:"Layer",style:{stroke:"var(--color-font-main)",fill:"var(--color-font-main)"},enableBackground:"new 0 0 64 64",transform:"translate(4,-5)",height:"28",viewBox:"0 0 64 64",width:"28",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m32 8c-13.233 0-24 10.767-24 24s10.767 24 24 24 24-10.767 24-24-10.767-24-24-24zm0 44c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"}),r.a.createElement("path",{d:"m32 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}),r.a.createElement("path",{d:"m23 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}),r.a.createElement("path",{d:"m41 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}))),this.state.showMenu?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bgMenuHandler"}),r.a.createElement("div",{className:"cardMenu",ref:function(t){e.dropdownMenu=t}},r.a.createElement(S,{className:"linkCard"}),r.a.createElement(i.b,{className:"linkCard",onClick:function(t){return e.handleSelectTable(t,"Refap23")},to:"/Refap"},"REFAP  23\u23e47\u23e415"),r.a.createElement(i.b,{className:"linkCard",onClick:function(t){return e.handleSelectTable(t,"Refap0")},to:"/Refap0"},"REFAP  0\u23e48\u23e416"),"",r.a.createElement("div",{className:"menuTextInfo"},r.a.createElement("div",{className:"TextInfoEmail"},"Envie sua tabela para ",r.a.createElement("a",{href:"mailto:turno.tabela+click@gmail.com",onClick:function(){return v("Click","CardMenuEmailClick","label2")}},"turno.tabela@gmail.com")),r.a.createElement("div",null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/bqlqn",rel:"noopener noreferrer",title:"bqlqn"},"bqlqn")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",rel:"noopener noreferrer",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",rel:"noopener noreferrer",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY")),r.a.createElement("div",null,"Icons made by ",r.a.createElement("a",{href:"https://www.freepik.com/",rel:"noopener noreferrer",title:"Freepik"},"Freepik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",rel:"noopener noreferrer",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",rel:"noopener noreferrer",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY")),r.a.createElement("div",null,"Internal number: ","xxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),"-",this.state.numVisitCounter)))):null)}}]),a}(n.Component),N=Object(c.f)(j),x=(a(36),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(s.a)(this,a),n=t.call(this,e);var r=window.localStorage.getItem("notification1")||0,l=r<2;return n.state={showComponent:l},r++,window.localStorage.setItem("notification1",r),n}return Object(u.a)(a,[{key:"handleClick",value:function(){v("Click","CloseNotification","label3"),this.setState({showComponent:!1})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.showComponent&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"divAllForClose",onClick:this.handleClick.bind(this)}),r.a.createElement("div",{className:"divNotification"},r.a.createElement("span",{role:"img","aria-label":"Emoji alert"},"\ud83d\udde3"),r.a.createElement("br",null),"Qualquer diverg\xeancia na tabela avise em ",r.a.createElement("a",{href:"mailto:turno.tabela@gmail.com"},"turno.tabela@gmail.com"),r.a.createElement("br",null),r.a.createElement("br",null))))}}]),a}(n.Component));a(37);var R=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center",marginBottom:"25px"}},r.a.createElement("span",{role:"img","aria-label":"Emoji sunglasses"},"\ud83d\ude0e"))}}]),a}(n.Component),B=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isToggleOn:!0},n}return Object(u.a)(a,[{key:"handleClick",value:function(){v("Click","TableTitle","label2"),this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("span",{onClick:function(){return e.handleClick()},style:{marginLeft:"20px",textDecoration:"none",textOverflow:"hidden",fontSize:this.state.isToggleOn?"16px":"10px"}},this.state.isToggleOn?this.props.text:"tabelaturno.github.io/TabelaTurno/"+this.props.text)}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"handleReload",value:function(){return v("Click","AppIcon","label2"),window.location.reload()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{onClick:function(){return e.handleReload()}},r.a.createElement("svg",{id:"Layer2",style:{float:"left",stroke:"var(--color-font-main)",fill:"var(--color-font-main)"},enableBackground:"new 0 0 64 64",transform:"translate(-4,-4)",height:"28",viewBox:"0 0 612 612",width:"28",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",null,r.a.createElement("circle",{cx:"386",cy:"210",r:"20"}),r.a.createElement("path",{d:"M432,40h-26V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v20h-91V20c0-11.046-8.954-20-20-20 c-11.046,0-20,8.954-20,20v20h-90V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v20H80C35.888,40,0,75.888,0,120v312 c0,44.112,35.888,80,80,80h153c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H80c-22.056,0-40-17.944-40-40V120 c0-22.056,17.944-40,40-40h25v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h90v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h91 v20c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80h26c22.056,0,40,17.944,40,40v114c0,11.046,8.954,20,20,20 c11.046,0,20-8.954,20-20V120C512,75.888,476.112,40,432,40z"}),r.a.createElement("path",{d:"M391,270c-66.72,0-121,54.28-121,121s54.28,121,121,121s121-54.28,121-121S457.72,270,391,270z M391,472 c-44.663,0-81-36.336-81-81s36.337-81,81-81c44.663,0,81,36.336,81,81S435.663,472,391,472z"}),r.a.createElement("path",{d:"M420,371h-9v-21c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v41c0,11.046,8.954,20,20,20h29 c11.046,0,20-8.954,20-20C440,379.954,431.046,371,420,371z"}),r.a.createElement("circle",{cx:"299",cy:"210",r:"20"}),r.a.createElement("circle",{cx:"212",cy:"297",r:"20"}),r.a.createElement("circle",{cx:"125",cy:"210",r:"20"}),r.a.createElement("circle",{cx:"125",cy:"297",r:"20"}),r.a.createElement("circle",{cx:"125",cy:"384",r:"20"}),r.a.createElement("circle",{cx:"212",cy:"384",r:"20"}),r.a.createElement("circle",{cx:"212",cy:"210",r:"20"}))))}}]),a}(n.Component),I=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(s.a)(this,a),n=t.call(this,e),function(){var e=document.createElement("style");e.type="text/css";var t=window.pageYOffset,a=!1;window.onscroll=function(){var n=window.pageYOffset,r=0===document.getElementsByClassName("cardMenu").length;t>n?!0===a&&(document.getElementsByClassName("topBar")[0].style.top="0px",e.innerHTML=".trHead th { top: 48px; position: sticky; }",document.getElementsByTagName("head")[0].appendChild(e),a=!1):!1===a&&r&&(document.getElementsByClassName("topBar")[0].style.top="-50px",e.innerHTML=".trHead th { top: -1px; position: inherit; }",document.getElementsByTagName("head")[0].appendChild(e),a=!0),t=n}}();var r=window.localStorage.getItem("lastTableName");console.log("Lasttable: "+r);var l=n.props.match.params.tableUrl;return console.log(n.props.match),"Refap"!==l&&"Refap0"!==l&&(l=r||"Refap",console.log("Mudou para padrao: "+l),window.history.pushState(l,"TabelaTurno","/"+l)),window.localStorage.setItem("lastTableName",l),"themeBlack"===window.localStorage.getItem("AppTheme")&&document.body.classList.add("themeBlack"),n.state={tableName:l},n}return Object(u.a)(a,[{key:"render",value:function(){"Refap"!==this.props.match.params.tableUrl&&"Refap0"!==this.props.match.params.tableUrl&&(this.props.match.params.tableUrl="Refap");var e=this.props.match.params.tableUrl||"Refap",t=this.props.match.params.group;return console.log("DEFINITIVO NOME QUE VAI PARA: "+e),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement("div",{className:"topBar",style:{verticalAlign:"center"}},r.a.createElement(A,null),r.a.createElement(B,{text:e}),r.a.createElement(N,{style:{float:"right"}})),r.a.createElement(R,null),r.a.createElement(D,{month:"10",tableName:e,groupSelected:t}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L,V=Object(c.f)((L=function(){return r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/about",render:function(){return r.a.createElement("div",null,"ABOUT")}}),r.a.createElement(c.a,{path:"/:tableUrl?/:group?",component:I}))},function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).trackPage=function(e){g.a.set({page:e}),g.a.pageview(e)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname;this.trackPage(e)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.location.pathname,a=e.location.pathname;t!==a&&this.trackPage(a)}},{key:"render",value:function(){return r.a.createElement(L,this.props)}}]),a}(r.a.Component))),Y=function(){return r.a.createElement(i.a,{basename:"/TabelaTurno"},r.a.createElement(V,null))};o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.248bccf6.chunk.js.map