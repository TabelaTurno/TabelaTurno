(this.webpackJsonpTabelaTurno=this.webpackJsonpTabelaTurno||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},26:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(15),o=n.n(r),s=n(7),c=n(5);n(23);let i=[];i.Teste4=" A B C D\n  8 8 8 F\n  8 8 F 8\n  8 F 8 8\n  F 8 8 8\n  8 8 8 8",i.Refap=" G1 G2 G3 G4 G5\n  23 7 F 15 F\n  23 7 F 15 F\n  23 F 7 15 F\n  23 15 7 F F\n  F 15 7 F 23\n  F 15 7 F 23\n  7 15 F F 23\n  7 F 15 23 F\n  7 F 15 23 F\n  F F 15 23 7\n  15 F F 23 7\n  15 23 F F 7\n  15 23 F F 7\n  15 23 F 7 F\n  F F 23 7 15\n  F F 23 7 15\n  F 7 23 F 15\n  F 7 23 15 F\n  23 7 F 15 F\n  23 7 F 15 F\n  23 F 7 15 F\n  F 15 7 F 23\n  F 15 7 F 23\n  7 15 F F 23\n  7 F 15 F 23\n  7 F 15 23 F\n  7 F 15 23 F\n  F F 15 23 7\n  15 23 F F 7\n  15 23 F F 7\n  15 23 F 7 F\n  F 23 F 7 15\n  F F 23 7 15\n  F F 23 7 15\n  F 7 23 F 15",i.Refap0=" G1 G2 G3 G4 G5\n    F 8 0 16 F\n    0 8 F 16 F\n    0 F 8 16 F\n    0 16 8 F F\n    0 16 8 F F\n    F 16 8 F 0\n    8 16 F F 0\n    8 F 16 F 0\n    8 F 16 0 F\n    F F 16 0 8\n    16 F F 0 8\n    16 F F 0 8\n    16 0 F F 8\n    16 0 F 8 F\n    F 0 F 8 16\n    F F 0 8 16\n    F 8 0 F 16\n    F 8 0 16 F\n    F 8 0 16 F\n    0 8 F 16 F\n    0 F 8 16 F\n    0 16 8 F F\n    F 16 8 F 0\n    8 16 F F 0\n    8 F 16 F 0\n    8 F 16 F 0\n    8 F 16 0 F\n    F F 16 0 8\n    16 F F 0 8\n    16 0 F F 8\n    16 0 F 8 F\n    F 0 F 8 16\n    F 0 F 8 16\n    F F 0 8 16\n    F 8 0 F 16",i.Reduc="I II III IV V\n    15 7 F F 23\n    15 F 7 F 23\n    15 23 7 F F\n    F 23 7 15 F\n    7 F 23 15 F\n    7 F 23 15 F\n    7 F 23 15 F\n    7 F F 23 15\n    F 7 F 23 15\n    23 7 F F 15\n    23 7 15 F F\n    F 23 15 F 7\n    F 23 15 F 7\n    F 23 15 F 7\n    F F 23 15 7\n    7 F 23 15 F\n    7 F F 15 23\n    7 15 F F 23\n    23 15 F 7 F\n    23 15 F 7 F\n    23 15 F 7 F\n    F 23 15 7 F\n    F 23 15 F 7\n    F F 15 23 7\n    15 F F 23 7\n    15 F 7 F 23\n    15 F 7 F 23\n    15 F 7 F 23\n    23 15 7 F F\n    23 15 F 7 F\n    F 15 23 7 F\n    F F 23 7 15\n    F 7 F 23 15\n    F 7 F 23 15\n    F 7 F 23 15",i.Refap12x12=" G1 G2 G3 G4 G5\n    F F 7 19 F\n    F F F 19 7\n    19 F F F 7\n    19 F F F 7\n    19 7 F F F\n    F 7 19 F F\n    F 7 19 F F\n    F F 19 7 F\n    F F F 7 19\n    F F F 7 19\n    7 F F F 19\n    7 19 F F F\n    7 19 F F F\n    F 19 7 F F\n    F F 7 19 F",i.Repar12x12=" A B C D E\n    F 7 19 F F\n    F 7 19 F F\n    F F 19 7 F\n    F F F 7 19\n    F F F 7 19\n    7 F F F 19\n    7 19 F F F\n    7 19 F F F\n    F 19 7 F F\n    F F 7 19 F\n    F F 7 19 F\n    F F F 19 7\n    19 F F F 7\n    19 F F F 7\n    19 7 F F F",i.Replan12x12=i.Repar12x12,i.Rpbc12x12=" A B C D E\n    F F 19 7 F\n    F F F 7 19\n    F F F 7 19\n    7 F F F 19\n    7 19 F F F\n    7 19 F F F\n    F 19 7 F F\n    F F 7 19 F\n    F F 7 19 F\n    F F F 19 7\n    19 F F F 7\n    19 F F F 7\n    19 7 F F F\n    F 7 19 F F\n    F 7 19 F F";var F={tableName:"Refap",tableLink:"refap23",firstDay:"2018-08-01",firstDayJS:"",groups:"",daysLines:"",populateTableDate:function(e){e||(e="Refap12x12"),this.tableData=i[e];let t=this.tableData.replace(/^\s+/g,"").split("\n").map((function(e,t){return e.replace(/^\s+/g,"").split(" ")}));this.groups=t[0],t.splice(0,1),this.daysLines=t;let n=this.firstDay.split("-");return this.firstDayJS=new Date(n[0],n[1]-1,n[2]),console.log(this.firstDayJS)},getDayScales:function(e){let t={day:"",groups:"",schedule:""},n=this.daysLines.length,a=function(e,t){const n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),a=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.floor((a-n)/864e5)}(this.firstDayJS,e)/n,l=(a-Math.floor(a)).toFixed(6)*n,r=Math.round(l);return t.day=e,t.groups=this.groups,t.schedule=this.daysLines[r],t},getMonthScales:function(e){let t=[],n=e.getMonth(),a=e.getFullYear(),l=new Date(a,n+1,0).getDate();for(let r=1;r<=l;r++){let e=new Date(a,n,r,8,0,0),l=this.getDayScales(e);t.push(l)}return t}},m=n(9);m.a.initialize("UA-92630735-3");const h=(e,t,n)=>m.a.event({category:e,action:t,label:n});Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};const u=["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"],d=function(e){return["F",0,6].includes(e)?"tdF":""},p=function(e){return function(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(e,new Date)?"tdToday":""},g=function(e){return console.log("Click:"+e),h("Click",e,"label2"),!0};const f=e=>e.map((e,t)=>l.a.createElement("th",{key:t,onClick:()=>{!function(e,t){document.querySelectorAll(".tdDayCol"+e).forEach((function(e){e.classList.toggle("backSelected")})),g("Grupo "+t)}(t,e)}},e)),E=e=>e.map((e,t)=>{return l.a.createElement("tr",{key:t,className:[(n=e.day,{0:"trSunday",1:"trMonday",2:"trTuesday",3:"trWednesday",4:"trThursday",5:"trFriday",6:"trSaturday"}[n.getDay()]),"trTable"].join(" ")},l.a.createElement("td",{key:t,className:["tdDate",p(e.day)].join(" ")}," ",e.day.toLocaleDateString("pt",{day:"2-digit",month:"short"}).replace(" de ","/").replace(".","")),(e=>{let t=e.getDay(),n=u[t].toUpperCase();return l.a.createElement("td",{className:[d(t),"tdWeekCol"].join(" ")},n)})(e.day),(e=>e.schedule.map((e,t)=>l.a.createElement("td",{key:t,className:["tdDayCol"+t,d(e)].join(" ")},e)))(e));var n}),b=e=>{return l.a.createElement("tr",{className:"trHead"},(t=e[0].day,l.a.createElement("th",{className:"tdDate",onClick:()=>g("Ano"+t.getFullYear())},t.getFullYear())),l.a.createElement("th",null,"\xa0"),f(e[0].groups));var t},w=e=>[b(e),E(e)];class C extends l.a.Component{constructor(e){super(e);const t=this.props.tableName;this.setState({tableEra:t}),this.initTableComponent()}initTableComponent(){const e=this.props.tableName;F.populateTableDate(e);const t=new Date,n=F.getMonthScales(t);let a=new Date(t.getFullYear(),t.getMonth()-1,1),l=F.getMonthScales(a);this.state={tableInput:e,dayOne:t,actualDay:t,monthsTRs:[w(l),w(n)]}}tick(){const e=this.state.actualDay;let t=new Date(e.getFullYear(),e.getMonth()+1,1),n=F.getMonthScales(t);this.setState({monthsTRs:[...this.state.monthsTRs,w(n)],actualDay:t});let a=e.getFullYear()+"-"+(e.getMonth()+1);console.log(a),h("Navigation",a,"label3")}handleScroll(){let e=function(){var e=window.pageYOffset,t=window.innerHeight,n=document.body.offsetHeight;return Math.max(n-(e+t),0)}();if(e>0&&e<=1400){this.tick.bind(this)()}}componentDidMount(){let e=this.props.groupSelected;if(void 0!=e){var t="//th[text()='"+e+"']",n=document.evaluate(t,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;n.click(),console.log("Mathing"),console.log(n)}document.addEventListener("scroll",this.handleScroll.bind(this));setTimeout((function(){window.scrollTo(0,document.getElementsByClassName("tdToday")[0].offsetTop-135)}),50);this.tick.bind(this)()}componentDidUpdate(e){if(this.props.tableName!==e.tableName){this.initTableComponent(),this.tick.bind(this)()}}render(){return l.a.createElement("table",{className:"tbMain"},(e=this.state.monthsTRs,l.a.createElement("tbody",null,e)));var e}}var y=C;class v extends l.a.Component{constructor(e){super(e);let t=window.localStorage.getItem("AppTheme"),n=null==t?"":t;this.state={AppTheme:n}}handleTheme(){""===this.state.AppTheme?this.setState({AppTheme:"themeBlack"},(function(){document.body.classList.add("themeBlack"),window.localStorage.setItem("AppTheme","themeBlack")})):this.setState({AppTheme:""},(function(){document.body.classList.remove("themeBlack"),window.localStorage.setItem("AppTheme","")}))}handleClickTheme(){this.handleTheme.bind(this)()}render(){const e=""===this.state.AppTheme?"escuro":"claro";return l.a.createElement("div",{className:this.props.className,onClick:this.handleClickTheme.bind(this)},"Tema ",e)}}var k=v;n(26);class x extends a.Component{constructor(){super();let e=null==window.localStorage.getItem("numVisitCounter")?0:window.localStorage.getItem("numVisitCounter");this.state={showMenu:!1,numVisitCounter:e},this.showMenu=this.showMenu.bind(this),this.closeMenu=this.closeMenu.bind(this)}showMenu(e){e.preventDefault(),this.setState({numVisitCounter:1*this.state.numVisitCounter+1}),window.localStorage.setItem("numVisitCounter",this.state.numVisitCounter),this.setState({showMenu:!0},()=>{document.addEventListener("click",this.closeMenu)}),h("Click","CardMenuIconClick","label2")}closeMenu(e){if("undefined"!==typeof this.dropdownMenu){if(null==this.dropdownMenu)return!0;let t=e.target;this.dropdownMenu.contains(t)||this.setState({showMenu:!1},()=>{document.removeEventListener("click",this.closeMenu)})}}handleSelectTable(e,t){h("Click","CardMenu"+t+"Click","label2"),this.closeMenu.bind(this)(this)}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{float:"right",userSelect:"none"},onClick:this.showMenu},l.a.createElement("svg",{id:"Layer",style:{stroke:"var(--color-font-main)",fill:"var(--color-font-main)"},enableBackground:"new 0 0 64 64",transform:"translate(4,-5)",height:"28",viewBox:"0 0 64 64",width:"28",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"m32 8c-13.233 0-24 10.767-24 24s10.767 24 24 24 24-10.767 24-24-10.767-24-24-24zm0 44c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"}),l.a.createElement("path",{d:"m32 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}),l.a.createElement("path",{d:"m23 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}),l.a.createElement("path",{d:"m41 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}))),this.state.showMenu?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"bgMenuHandler"}),l.a.createElement("div",{className:"cardMenu",ref:e=>{this.dropdownMenu=e}},l.a.createElement(k,{className:"linkCard"}),l.a.createElement(c.b,{className:"linkCard",onClick:e=>this.handleSelectTable(e,"Refap12x12"),to:"/Refap12x12"},"REFAP 12x12"),l.a.createElement(c.b,{className:"linkCard",onClick:e=>this.handleSelectTable(e,"Refap23"),to:"/Refap"},"REFAP 23-7-15"),l.a.createElement(c.b,{className:"linkCard",onClick:e=>this.handleSelectTable(e,"Refap0"),to:"/Refap0"},"REFAP 0-8-16"),l.a.createElement(c.b,{className:"linkCard",onClick:e=>this.handleSelectTable(e,"Repar12x12"),to:"/Repar12x12"},"REPAR 12x12"),l.a.createElement(c.b,{className:"linkCard",onClick:e=>this.handleSelectTable(e,"Replan12x12"),to:"/Replan12x12"},"REPLAN 12x12"),l.a.createElement(c.b,{className:"linkCard",onClick:e=>this.handleSelectTable(e,"Rpbc12x12"),to:"/Rpbc12x12"},"RPBC 12x12"),"",l.a.createElement("div",{className:"menuTextInfo"},l.a.createElement("div",null,"Envie sua tabela para ",l.a.createElement("a",{href:"mailto:tabelaturno@gmail.com",onClick:()=>h("Click","CardMenuEmailClick","label2")},"tabelaturno@gmail.com")),l.a.createElement("div",null,"Icons made by ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/bqlqn",rel:"noopener noreferrer",title:"bqlqn"},"bqlqn")," from ",l.a.createElement("a",{href:"https://www.flaticon.com/",rel:"noopener noreferrer",title:"Flaticon"},"www.flaticon.com")," is licensed by ",l.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",rel:"noopener noreferrer",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY")),l.a.createElement("div",null,"Icons made by ",l.a.createElement("a",{href:"https://www.freepik.com/",rel:"noopener noreferrer",title:"Freepik"},"Freepik")," from ",l.a.createElement("a",{href:"https://www.flaticon.com/",rel:"noopener noreferrer",title:"Flaticon"},"www.flaticon.com")," is licensed by ",l.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",rel:"noopener noreferrer",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY")),l.a.createElement("span",null,"Internal number: ","xxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),"-",this.state.numVisitCounter)))):null)}}var T=Object(s.f)(x);n(30);class S extends a.Component{constructor(e){super(e),this.state={showComponent:!1}}handleClick(){h("Click","CloseNotification","label3"),this.setState({showComponent:!1})}render(){return l.a.createElement(l.a.Fragment,null,this.state.showComponent&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"divAllForClose",onClick:this.handleClick.bind(this)}),l.a.createElement("div",{className:"divNotification"}," \u26a0\ufe0f ",l.a.createElement("br",null),"A nova tabela de 12 horas ser\xe1 adicionada ainda hoje. ",l.a.createElement("br",null),l.a.createElement("br",null))))}}var D=S;n(31);class M extends a.Component{constructor(){super()}render(){return l.a.createElement("div",{style:{textAlign:"center",marginBottom:"25px"}},l.a.createElement("span",{role:"img","aria-label":"Emoji sunglasses"},"\ud83d\ude0e"))}}class N extends a.Component{constructor(e){super(e)}handleClick(){h("Click","TableTitle","label2"),this.setState({textTitle:"tabelaturno.github.io/"+this.props.text})}render(){return l.a.createElement("span",{onClick:()=>this.handleClick(),style:{marginLeft:"20px",textDecoration:"none"}},this.props.text)}}class R extends a.Component{constructor(){super()}handleReload(){return h("Click","AppIcon","label2"),window.location.reload()}render(){return l.a.createElement("div",{onClick:()=>this.handleReload()},l.a.createElement("svg",{id:"Layer2",style:{float:"left",stroke:"var(--color-font-main)",fill:"var(--color-font-main)"},enableBackground:"new 0 0 64 64",transform:"translate(-4,-4)",height:"28",viewBox:"0 0 612 612",width:"28",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",null,l.a.createElement("circle",{cx:"386",cy:"210",r:"20"}),l.a.createElement("path",{d:"M432,40h-26V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v20h-91V20c0-11.046-8.954-20-20-20 c-11.046,0-20,8.954-20,20v20h-90V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v20H80C35.888,40,0,75.888,0,120v312 c0,44.112,35.888,80,80,80h153c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H80c-22.056,0-40-17.944-40-40V120 c0-22.056,17.944-40,40-40h25v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h90v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h91 v20c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80h26c22.056,0,40,17.944,40,40v114c0,11.046,8.954,20,20,20 c11.046,0,20-8.954,20-20V120C512,75.888,476.112,40,432,40z"}),l.a.createElement("path",{d:"M391,270c-66.72,0-121,54.28-121,121s54.28,121,121,121s121-54.28,121-121S457.72,270,391,270z M391,472 c-44.663,0-81-36.336-81-81s36.337-81,81-81c44.663,0,81,36.336,81,81S435.663,472,391,472z"}),l.a.createElement("path",{d:"M420,371h-9v-21c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v41c0,11.046,8.954,20,20,20h29 c11.046,0,20-8.954,20-20C440,379.954,431.046,371,420,371z"}),l.a.createElement("circle",{cx:"299",cy:"210",r:"20"}),l.a.createElement("circle",{cx:"212",cy:"297",r:"20"}),l.a.createElement("circle",{cx:"125",cy:"210",r:"20"}),l.a.createElement("circle",{cx:"125",cy:"297",r:"20"}),l.a.createElement("circle",{cx:"125",cy:"384",r:"20"}),l.a.createElement("circle",{cx:"212",cy:"384",r:"20"}),l.a.createElement("circle",{cx:"212",cy:"210",r:"20"}))))}}class B extends l.a.Component{constructor(e){super(e),function(){var e=document.createElement("style");e.type="text/css";var t=window.pageYOffset,n=!1;window.onscroll=function(){var a=window.pageYOffset;let l=0==document.getElementsByClassName("cardMenu").length;t>a?!0===n&&(document.getElementsByClassName("topBar")[0].style.top="0px",e.innerHTML=".trHead th { top: 48px; }",document.getElementsByTagName("head")[0].appendChild(e),n=!1):!1===n&&l&&(document.getElementsByClassName("topBar")[0].style.top="-50px",e.innerHTML=".trHead th { top: -1px; }",document.getElementsByTagName("head")[0].appendChild(e),n=!0),t=a}}(),console.log("passou pelo constructuros.");let t=window.localStorage.getItem("lastTableName");console.log("Lasttable: "+t);let n=this.props.match.params.tableUrl;console.log(this.props.match),console.log("TableName "+n),""!=n&&void 0!=n||(n=t||"Refap",console.log("Mudou para padrao: "+n),window.history.pushState(n,"Tabela","/"+n)),window.localStorage.setItem("lastTableName",n),"themeBlack"==window.localStorage.getItem("AppTheme")&&document.body.classList.add("themeBlack"),this.state={tableName:n}}render(){let e=this.props.match.params.tableUrl||"Refap12x12",t=this.props.match.params.group;return this.state.tableName=e,l.a.createElement(l.a.Fragment,null,l.a.createElement(D,null),l.a.createElement("div",{className:"topBar",style:{verticalAlign:"center"}},l.a.createElement(R,null),l.a.createElement(N,{text:e}),l.a.createElement(T,{style:{float:"right"}})),l.a.createElement(M,null),l.a.createElement(y,{month:"7",tableName:e,groupSelected:t}))}}var A=B;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));const I=Object(s.f)((L=function(){return l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/about",render:()=>l.a.createElement("div",null,"ABOUT")}),l.a.createElement(s.a,{path:"/:tableUrl?/:group?",component:A}))},class extends l.a.Component{constructor(...e){super(...e),this.trackPage=e=>{m.a.set({page:e}),m.a.pageview(e)}}componentDidMount(){const e=this.props.location.pathname;this.trackPage(e)}UNSAFE_componentWillReceiveProps(e){const t=this.props.location.pathname,n=e.location.pathname;t!==n&&this.trackPage(n)}render(){return l.a.createElement(L,this.props)}}));var L;const V=()=>l.a.createElement(c.a,{basename:"/TabelaTurno"},l.a.createElement(I,null));o.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.247e1018.chunk.js.map