require('normalize.css/normalize.css');
require('styles/App.css');

import testImg from '../images/Quantity_high_2.png';
import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="mpso">
          <img src={testImg}/>
          <button className="next hvr-buzz">Next</button>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
