require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 10
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.active && !this.props.active) {
      this.triggerTimer();
    }
    else if (!newProps.active) {
      clearInterval(this.state.timer);
    }
  }

  componentWillUnmount() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
  }

  triggerTimer() {
    let timer = setInterval(() => {
      let time = this.state.time - 1;
      this.setState({time});
      this.props.handleTimeTick(time);
      if (!time) {
        clearInterval(timer);
      }
    },1000);
    this.setState({timer});

  }

  getMinute() {
    const time = Math.floor(this.state.time / 60);
    if (time === 0) {
      return '00';
    }
    return time;
  }

  getSeconds() {
    const time = Math.abs((Math.floor(this.state.time / 60) * 60) - this.state.time)
    if (time < 10) {
      return '0' + time;
    }
    return time;
  }

  render() {
    return (
      <div>
        {this.getMinute()} : {this.getSeconds()}
      </div>
    );
  }
}

Timer.defaultProps = {
};

export default Timer;
