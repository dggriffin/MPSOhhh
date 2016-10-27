require('styles/App.css');

import React from 'react';
import {RaisedButton, TextField} from 'material-ui';
import Timer from './Timer';

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participant: '',
      state: ''
    };
  }

  handleStartClick() {
    this.props.handleViewStart(this.state.participant);
  }

  handleResetClick() {
    this.props.handleViewReset();
  }

  getMinute() {
    const time = Math.floor(this.props.time / 60);
    if (time === 0) {
      return '00';
    }
    return time;
  }

  getSeconds() {
    const time = Math.abs((Math.floor(this.props.time / 60) * 60) - this.props.time)
    if (time < 10) {
      return '0' + time;
    }
    return time;
  }

  render() {
    return (
      <div className="sign-up">
        <div className="title">
          Admin View
        </div>
        {this.getMinute()} : {this.getSeconds()}
        <div>
          <TextField

            value={this.state.firstName}
            floatingLabelText="First Name"
          /><br />
          <TextField

            value={this.state.lastName}
            floatingLabelText="Last Name"
          /><br />
          <TextField

            value={this.state.teamName}
            floatingLabelText="Work Team Name"
          /><br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={{width: '100%', marginTop: 25}}

          />
        </div>
      </div>
    );
  }
}

AdminView.defaultProps = {
};

export default AdminView;
