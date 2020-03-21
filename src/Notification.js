import React, { Component } from 'react';
import { trackEvent } from './analytics';

import './Notification.css';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showComponent: true,
    };

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
                <div className="divNotification"> ⚠️ <br />A nova tabela de 12 horas será adicionada ainda hoje. <br /><br /></div>
            </>
            }
          </>
      );
  }
}

export default Notification;