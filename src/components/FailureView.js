require('styles/Failure.css');

import React from 'react';

class FailureView extends React.Component {
  render() {
    return (
      <div className='fail-main'>
        <div style={{textAlign: 'center'}}>
          Failure!
        </div>
      </div>
    );
  }
}

FailureView.defaultProps = {
};

export default FailureView;
