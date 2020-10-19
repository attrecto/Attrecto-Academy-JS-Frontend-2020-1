import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Router} from "react-router";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
      <Router history={history} >
          <App/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
