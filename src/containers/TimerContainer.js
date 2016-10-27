import React from 'react';
const Rebase = require('re-base');
const base = Rebase.createClass({
      apiKey: 'AIzaSyBrgyl-UXdpEFISSGnf1isc_TkrVB2S0Hs',
      authDomain: 'mpsohhh.firebaseapp.com',
      databaseURL: 'https://mpsohhh.firebaseio.com',
      storageBucket: ''
});

import Timer from '../components/Timer.js';

class TimerContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  componentDidMount(){
    base.syncState(`${this.props.baseUrl}/time`, {
      context: this,
      state: 'time'
    });

    base.listenTo(`${this.props.baseUrl}/state`, {
      context: this,
      then(state) {
        switch (state) {
          case 'IN-PROGRESS':
            this.setState({active: true});

          case 'FAILURE':
          case 'SUCCESS':
          case 'READY':
            this.setState({active: false});
        }

        if (state === 'IN-PROGRESS') {
          this.setState({active: true});
        }
      }
    })
  }

  handleTimeTick(time) {
    this.setState({time});
    if (!time) {
      base.post(`${this.props.baseUrl}/state`, {
        context: this,
        data: 'FAILURE'
      });
    }
  }

  render() {
    return (
      <div>
        {<Timer active={this.state.active} handleTimeTick={this.handleTimeTick.bind(this)}/>}
      </div>
    );
  }
}

TimerContainer.defaultProps = {
};

export default TimerContainer;
