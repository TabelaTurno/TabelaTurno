import React, { Component } from 'react';
import { trackEvent } from './analytics';

import './Notification.css';

class Notification extends Component {
  constructor(props) {
    super(props);
    // If null, then 0;
    let incNotification = window.localStorage.getItem("notification4") || 0;
    let showNotf = incNotification < 2 ? true : false;
    this.state = {
        /* Remove '&& 0' to use Notification Component */
        showComponent: showNotf,
    };
    
    incNotification++;
    window.localStorage.setItem("notification4", incNotification);


  }

  handleClick() {
    
    trackEvent('Click', 'CloseNotification', 'label3');

      this.setState({
          showComponent: false,
      });
  }

  render() {
      return (
          <>
          {this.state.showComponent && 
            <>
                <div className="divAllForClose" onClick={this.handleClick.bind(this)}></div>
                <div className="divNotification">
                  <span role="img" aria-label="Emoji alert">🗣✉️</span><br />
                  Tabela atualizada para a nova tabela de 12h modelo da REPLAN. <br />Contato em <a href="mailto:turno.tabela@gmail.com">turno.tabela@gmail.com</a><br /><br />
                  <div class="divButClose">OK</div>
                </div>
            </>
            }
          </>
      );
  }
}

export default Notification;