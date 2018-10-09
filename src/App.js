import React, { Component } from 'react';
import Tabela from './tabela2';
//import withAnalytics from './analytics';
import './App.css';


class App extends Component {
  state = {
    tabelaName: "Refap23"
  };
  handleClick = event => {
    let state1 = this.state.tabelaName === "Refap23" ? "Teste4" : "Refap23";
    this.setState({ tabelaName: state1 });
  };
  render() {
    const {tabelaName} = this.state;
    const stl = {
      width: '100%',
      height: '100%',
      position: 'fixed',
      background: '#FFF',
      textalign: 'center',
      paddingTop: '0px',
      
    };
    const debugdiv = {position: 'fixed', top:'0px', height: '40px', width: '100%', background: 'red', zIndex: '40'};
  /*   <div style={debugdiv}>Debug: {process.env.NODE_ENV}</div>  */
    return (
      <div className="App">
        <div style={stl}>http://tabelaturno.github.io<br /> Obrigado pela preferência! ☺  </div>
        <Tabela month="7" tabela={tabelaName}></Tabela>      
      </div>
    );
  }
}

export default App;
