import React from 'react';
const Rebase = require('re-base');
const base = Rebase.createClass({
      apiKey: 'AIzaSyBrgyl-UXdpEFISSGnf1isc_TkrVB2S0Hs',
      authDomain: 'mpsohhh.firebaseapp.com',
      databaseURL: 'https://mpsohhh.firebaseio.com',
      storageBucket: ''
});

class AdminContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    base.bindToState('quantity/', {
      context: this,
      state: 'quantity'
    });
    base.bindToState('matching/', {
      context: this,
      state: 'matching'
    });
    base.bindToState('stock/', {
      context: this,
      state: 'stock'
    });
  }

  handleViewReset(baseUrl) {

  }

  handleViewStart(baseUrl) {

  }

  render() {
    return (
      <div>
        {<AdminView
          handleViewStart={this.handleViewStart.bind(this)}
          handleViewReset={this.handleViewReset.bind(this)}/>}
      </div>
    );
  }
}

AdminContainer.defaultProps = {
};

export default AdminContainer;
