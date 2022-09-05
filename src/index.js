import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App1 from './App1';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './Login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App1}/>
      <Route exact path="/Login" component={Login}/>
      <Redirect to="/Login"/>
    </Switch>
</BrowserRouter >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
