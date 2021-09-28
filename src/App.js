import React, {Component} from 'react';
import Tabela from './tabela2';
import CardMenu from './CardMenu';
import Notification from './Notification';
import { trackEvent } from './analytics';

import './App.css';

function fnShowOnRollDown() {

  var style = document.createElement('style');
    style.type = 'text/css';
  

    var prevScrollpos = window.pageYOffset;
    var flagIsHiddenMenu = false;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    let isMenuClosed = document.getElementsByClassName("cardMenu").length === 0;

      if (prevScrollpos > currentScrollPos) {
        if (flagIsHiddenMenu === true) { //then SHOW
          document.getElementsByClassName("topBar")[0].style.top = "0px";
          style.innerHTML = '.trHead th { top: 48px; position: sticky; }';
          document.getElementsByTagName('head')[0].appendChild(style);
          flagIsHiddenMenu = false;
        }
      } else {
          if (flagIsHiddenMenu === false && isMenuClosed) { // then HIDE
            document.getElementsByClassName("topBar")[0].style.top = "-50px";
            style.innerHTML = '.trHead th { top: -1px; position: inherit; }';
            document.getElementsByTagName('head')[0].appendChild(style);
            flagIsHiddenMenu = true;
          }  
      }
      prevScrollpos = currentScrollPos;
    }
    return 0;
}


class EasterEggRollout extends Component {

  render() {
    return (
      <div style={{textAlign: 'center', marginBottom: '25px'}}>
          <span role="img" aria-label="Emoji sunglasses">😎</span>
      </div> 
  )
  }
}

class TableTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    //this.state = {textTitle: this.props.text};
  }

  handleClick() {
    trackEvent('Click', 'TableTitle', 'label2');

    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));

    //Copy to clipboard
    
  }

  render() {
    return (
      <span onClick={() => this.handleClick()} 
            style={{marginLeft: '20px', textDecoration: 'none', textOverflow: 'hidden', fontSize: this.state.isToggleOn ? '16px' : '10px'}}>
        {this.state.isToggleOn ?  this.props.text : "tabelaturno.github.io/TabelaTurno/" + this.props.text }
      </span>
    )
  }
}


class AppIcon extends Component {
  
  handleReload() {
    trackEvent('Click', 'AppIcon', 'label2');
    return window.location.reload();
  }
  render() {
    return (
      <div onClick={() => this.handleReload()}>
      <svg id="Layer2" style={{float:'left', stroke: 'var(--color-font-main)', fill: 'var(--color-font-main)'}} enableBackground="new 0 0 64 64"  transform="translate(-4,-4)" height="28" viewBox="0 0 612 612" width="28" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="386" cy="210" r="20" />
          <path d="M432,40h-26V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v20h-91V20c0-11.046-8.954-20-20-20
          c-11.046,0-20,8.954-20,20v20h-90V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v20H80C35.888,40,0,75.888,0,120v312
          c0,44.112,35.888,80,80,80h153c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H80c-22.056,0-40-17.944-40-40V120
          c0-22.056,17.944-40,40-40h25v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h90v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h91
          v20c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80h26c22.056,0,40,17.944,40,40v114c0,11.046,8.954,20,20,20
          c11.046,0,20-8.954,20-20V120C512,75.888,476.112,40,432,40z" />
          <path d="M391,270c-66.72,0-121,54.28-121,121s54.28,121,121,121s121-54.28,121-121S457.72,270,391,270z M391,472
          c-44.663,0-81-36.336-81-81s36.337-81,81-81c44.663,0,81,36.336,81,81S435.663,472,391,472z" />
          <path d="M420,371h-9v-21c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v41c0,11.046,8.954,20,20,20h29
          c11.046,0,20-8.954,20-20C440,379.954,431.046,371,420,371z" />
          <circle cx="299" cy="210" r="20" />
          <circle cx="212" cy="297" r="20" />
          <circle cx="125" cy="210" r="20" />
          <circle cx="125" cy="297" r="20" />
          <circle cx="125" cy="384" r="20" />
          <circle cx="212" cy="384" r="20" />
          <circle cx="212" cy="210" r="20" />
        </g>
      </svg>
      </div>)
  }

}


class App extends React.Component {  
  
  constructor(props) {
   super(props);
    //console.log(props.match);

    fnShowOnRollDown();


    let LastTableOnSession = window.localStorage.getItem("lastTableName");
    console.log("Lasttable: " + LastTableOnSession);
    
    let tableName = this.props.match.params.tableUrl;
    console.log(this.props.match);
    // If root adress, tableName came blank, and..
    // Force table Refap for avoid errors. 
    if  (tableName !== "Refap" && tableName !== "Refap0") {
     // if (tableName === "" || tableName === undefined) { 

        tableName = LastTableOnSession || "Refap"; // Refap is a const DEFAULT
        console.log("Mudou para padrao: " + tableName);
        window.history.pushState(tableName, "TabelaTurno", "/" + tableName);
      //}
    }
    window.localStorage.setItem("lastTableName", tableName);
    
    let storageTheme = window.localStorage.getItem('AppTheme');
    if (storageTheme === "themeBlack") {
      document.body.classList.add("themeBlack");
    }

    this.state = {
      tableName: tableName
    };



  }

  render() {
    
    
    /*if (this.props.match.params.tableUrl !== "Refap" && this.props.match.params.tableUrl !== "Refap0") {
      this.props.match.params.tableUrl = "Refap";
    }*/
    let tableName = this.props.match.params.tableUrl || "Refap";
    let groupSelected = this.props.match.params.group;
    //this.state.tableName = tableName;
    /*
    const debugdiv = {position: 'fixed', top:'10px', margin: '20px 30%', 
                      background: 'rgba(255,0,0,0.5)', zIndex: '400'};
     <div style={debugdiv}>Debug: {process.env.NODE_ENV} -- {tableName} ++ {this.state.tableName}</div>
    */
    return (
      <>       
        <Notification />
        <div className="topBar" style={{verticalAlign: 'center'}}>
          <AppIcon />
          <TableTitle text={tableName}/>
          <CardMenu style={{float: 'right'}} />
         
        </div>
        <EasterEggRollout />
        <Tabela month="7" tableName={tableName} groupSelected={groupSelected}></Tabela>
      </>
    );
  }
}

export default App;