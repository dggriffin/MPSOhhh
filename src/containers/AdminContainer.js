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
    this.state = {
      participants: {},
      data: {
        time: '',
        state: ''
      }
    }
  }

  componentDidMount() {
    base.bindToState(`${this.props.baseUrl}`, {
      context: this,
      state: 'data'
    });

    base.bindToState('nameMap', {
      context: this,
      state: 'participants'
    });
  }

  handleViewReset() {
    base.post(`${this.props.baseUrl}`, {
      context: this,
      data: {
        ...this.state.data,
        time: 300,
        state: 'READY',
        participant: ''
      }
    });
  }

  handleViewStart(particpantGUID) {
    base.post(`${this.props.baseUrl}`, {
      context: this,
      data: {
        ...this.state.data,
        state: 'IN-PROGRESS',
        participant: particpantGUID
      }
    });
  }

  render() {
    return (
      <div>
        {
          React.cloneElement(this.props.children, {
            participants: this.state.participants,
            time: this.state.data.time,
            state: this.state.data.state,
            handleViewStart: this.handleViewStart.bind(this),
            handleViewReset: this.handleViewReset.bind(this)
          })
        }
      </div>
    );
  }
}

AdminContainer.defaultProps = {
};

export default AdminContainer;
