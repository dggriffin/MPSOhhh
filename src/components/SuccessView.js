require('styles/Success.css');

import React from 'react';

class SuccessView extends React.Component {
  render() {
    return (
      <div className='success-main'>
        <div style={{textAlign: 'center'}}>
          Success!
        </div>
      </div>
    );
  }
}

SuccessView.defaultProps = {
};

export default SuccessView;
