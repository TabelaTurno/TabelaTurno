import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom';
import BtChangeTheme from './Theme';
import { trackEvent } from './analytics';

import './CardMenu.css';

function uuid_five() {
  return 'xxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}



class CardMenu extends Component {
  constructor() {
    super();
    
    
    let visitCache = (window.localStorage.getItem('numVisitCounter') == null) ? 0 : window.localStorage.getItem('numVisitCounter');

    this.state = {
      showMenu: false,
      numVisitCounter: visitCache
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({numVisitCounter: this.state.numVisitCounter*1+1 });
    window.localStorage.setItem('numVisitCounter', this.state.numVisitCounter);
    //debugger

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
    trackEvent('Click', 'CardMenuIconClick', 'label2');
  }
  
  closeMenu(event) {
    if (typeof this.dropdownMenu !== 'undefined') {
      
      if (this.dropdownMenu == null) {
        return true;
      }
      //debugger
      let evTarget = event.target;
      if (!this.dropdownMenu.contains(evTarget)) {
        
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });  
        
      }
      }
  }

  handleSelectTable(event, textTable)  {
    trackEvent('Click', "CardMenu" + textTable + "Click", 'label2');
    let closeMenu = this.closeMenu.bind(this);
    closeMenu(this);
    //console.log(event.target.href.split("/").slice(-1).pop());
  }

  render() {
    let buttonsForTest = "";
    
    //debugger
    if (process.env.NODE_ENV === 'development') {
      buttonsForTest = (
        <>
          <Link className="linkCard" to="/Teste4">Teste4</Link>
          <Link className="linkCard" onClick={(event) => this.handleSelectTable(event, "Refap23")}      to="/Refap">REFAP  23⏤7⏤15</Link>
          <Link className="linkCard" onClick={(event) => this.handleSelectTable(event, "Refap0")}       to="/Refap0">REFAP  0⏤8⏤16</Link>
        </>
      );
    }

    return (
      <>
      <div className="buttonCardMenu" onClick={this.showMenu}>
       <svg id="Layer" style={{stroke: 'var(--color-font-main)', fill: 'var(--color-font-main)'}} enableBackground="new 0 0 64 64"  transform="translate(4,-5)" height="28" viewBox="0 0 64 64" width="28" xmlns="http://www.w3.org/2000/svg">
        <path  d="m32 8c-13.233 0-24 10.767-24 24s10.767 24 24 24 24-10.767 24-24-10.767-24-24-24zm0 44c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"/>
        <path d="m32 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
        <path d="m23 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
        <path d="m41 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
       </svg>
      </div>
        {
          this.state.showMenu
            ? (
              <>
              <div className="bgMenuHandler"></div>
              <div className="cardMenu" ref={(element) => { this.dropdownMenu = element; }}>
                <BtChangeTheme className="linkCard" />
                
                {buttonsForTest}
                <div className="menuTextInfo">
                
                <div className="TextInfoEmail">Envie sua tabela para <a href="mailto:turno.tabela+click@gmail.com" onClick={() => trackEvent('Click', 'CardMenuEmailClick', 'label2')}>turno.tabela@gmail.com</a></div>  
                <div>Icons made by <a href="https://www.flaticon.com/authors/bqlqn" rel="noopener noreferrer" title="bqlqn">bqlqn</a> from <a href="https://www.flaticon.com/" rel="noopener noreferrer" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" rel="noopener noreferrer" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                <div>Icons made by <a href="https://www.freepik.com/" rel="noopener noreferrer" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" rel="noopener noreferrer" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" rel="noopener noreferrer" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                <div>Internal number: {uuid_five()}-{this.state.numVisitCounter}</div>
                </div>  
              </div>
              </>
            )
            : (
              null
            )
        }
      </>
    );
  }
}
CardMenu.propTypes = {
  //classes: PropTypes.object.isRequired,
};

/*
<Link className="linkCard" onClick={(event) => this.handleSelectTable(event, "Reduc")} to="/Reduc">Reduc</Link>
*/
export default withRouter(CardMenu);