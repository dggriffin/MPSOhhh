require('styles/App.css');

import testImg from '../images/Stock_high_2.png';
import React from 'react';
import TimerContainer from '../containers/TimerContainer.js';

class StockView extends React.Component {

  handleOnClick() {
      let code = prompt('Please enter your code to proceed');
      this.props.handleCodeEntry(code);
  }

  render() {
    return (
      <div className="stock">
        <div className="mpso">
          <img src={testImg}/>
          <button onClick={this.handleOnClick.bind(this)} className="next hvr-buzz">Next</button>
        </div>
        <div className='timer'>
          <TimerContainer baseUrl='stock' />
        </div>
      </div>
    );
  }
}

StockView.defaultProps = {
};

export default StockView;
