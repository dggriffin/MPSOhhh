import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ViewContainer from './containers/ViewContainer';
import QuantityView from './components/QuantityView';
import MatchingView from './components/MatchingView';
import StockView from './components/StockView';
import SignUpContainer from './containers/SignUpContainer';
import AdminView from './components/AdminView';
import AdminContainer from './containers/AdminContainer';

import { Router, Route, browserHistory } from 'react-router'

// Render the main component into the dom

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const QuantityRoute = React.createClass({
    render() {
      return (
        <ViewContainer baseUrl='quantity'>
          <QuantityView/>
        </ViewContainer>
      );
    }
});

const MatchingRoute = React.createClass({
    render() {
      return (
        <ViewContainer baseUrl='matching'>
          <MatchingView/>
        </ViewContainer>
      );
    }
});

const StockRoute = React.createClass({
    render() {
      return (
        <ViewContainer baseUrl='stock'>
          <StockView/>
        </ViewContainer>
      );
    }
});

const QuantityAdminRoute = React.createClass({
    render() {
      return (
        <AdminContainer baseUrl='quantity'>
          <AdminView/>
        </AdminContainer>
      );
    }
});

const MatchingAdminRoute = React.createClass({
    render() {
      return (
        <AdminContainer baseUrl='matching'>
          <AdminView/>
        </AdminContainer>
      );
    }
});

const StockAdminRoute = React.createClass({
    render() {
      return (
        <AdminContainer baseUrl='stock'>
          <AdminView/>
        </AdminContainer>
      );
    }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="quantity" component={QuantityRoute}/>
      <Route path="matching" component={MatchingRoute}/>
      <Route path="stock" component={StockRoute}/>
      <Route path="quantityAdmin" component={QuantityAdminRoute}/>
      <Route path="matchingAdmin" component={MatchingAdminRoute}/>
      <Route path="stockAdmin" component={StockAdminRoute}/>
      <Route path="signup" component={SignUpContainer}/>
    </Route>
  </Router>, document.getElementById('app'));
