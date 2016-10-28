require('styles/App.css');

import testImg from '../images/Quantity_high_2.png';
import React from 'react';
import TimerContainer from '../containers/TimerContainer.js';

class QuantityView extends React.Component {

  handleOnClick() {
      let code = prompt('Please enter your code to proceed');
      this.props.handleCodeEntry(code);
  }

  render() {
    return (
      <div className="index">
        <div className="mpso">
          <img src={testImg}/>
          <button onClick={this.handleOnClick.bind(this)} className="next hvr-buzz">Next</button>
        </div>
        <div className='timer'>
          <TimerContainer baseUrl='quantity' />
        </div>
      </div>
    );
  }
}

QuantityView.defaultProps = {
};

export default QuantityView;
