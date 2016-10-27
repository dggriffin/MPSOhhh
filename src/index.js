import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import ViewContainer from './containers/ViewContainer';
import QuantityView from './components/QuantityView';
import MatchingView from './components/MatchingView';
import StockView from './components/StockView';

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

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="quantity" component={QuantityRoute}/>
      <Route path="matching" component={MatchingRoute}/>
      <Route path="stock" component={StockRoute}/>
    </Route>
  </Router>, document.getElementById('app'));
