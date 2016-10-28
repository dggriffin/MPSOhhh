require('styles/App.css');

import testImg from '../images/Matching_high_2.png';
import React from 'react';
import TimerContainer from '../containers/TimerContainer.js';

class MatchingView extends React.Component {

  handleOnClick() {
      let code = prompt('Please enter your code to proceed');
      this.props.handleCodeEntry(code);
  }

  render() {
    return (
      <div className="matching">
        <div className="mpso">
          <img src={testImg}/>
          <button onClick={this.handleOnClick.bind(this)} className="next hvr-buzz">Next</button>
        </div>
        <TimerContainer baseUrl='matching' />
      </div>
    );
  }
}

MatchingView.defaultProps = {
};

export default MatchingView;
