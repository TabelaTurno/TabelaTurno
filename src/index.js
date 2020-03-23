import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import withAnalytics from "./analytics.js";
import * as serviceWorker from "./serviceWorker";


const Root = function () { 
  return (
    
    <Switch>
      <Route path="/about" render={() => <div>ABOUT</div>} />
      <Route path="/:tableUrl?/:group?" component={App} />
     
    </Switch>
  );
}

const App2 = withRouter(withAnalytics(Root));

const AppWithRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App2 />
  </BrowserRouter>
);

ReactDOM.render(<AppWithRouter />, document.getElementById("root"));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
