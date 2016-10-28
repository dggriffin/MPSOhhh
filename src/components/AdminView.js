require('styles/App.css');

import React from 'react';
import {RaisedButton, TextField, AutoComplete, MenuItem} from 'material-ui';

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participant: '',
      state: '',
      code: this.props.code
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({code: newProps.code});
  }

  handleStartClick() {
    this.props.handleViewStart(this.state.participant);
  }

  handleResetClick() {
    this.props.handleViewReset();
  }

  handleChangePassword(event) {
    this.setState({code: event.target.value});
  }

  handleSubmitPassword() {
    this.props.handleChangePassword(this.state.code);
  }

  handleParticipantChange(value) {
    this.setState({participant: value});
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
      <div className="admin">
        <div className="title">
          {this.props.title}
        </div>
        <div className="timer">
          {this.getMinute()} : {this.getSeconds()}
        </div>
        <div className="state">
          Room State: <br/> {this.props.state}
        </div>
        <AutoComplete
          filter={AutoComplete.caseInsensitiveFilter}
          floatingLabelText="Current Participant"
          dataSource={Object.keys(this.props.participants)}
          maxSearchResults={5}
          disabled={this.props.state !== 'READY'}
          onNewRequest={this.handleParticipantChange.bind(this)}
        >
        </AutoComplete>
        <RaisedButton
          label="Start"
          primary={true}
          disabled={this.props.state !== 'READY' || !this.state.participant}
          style={{width: '90%', marginTop: 25}}
          onClick={this.handleStartClick.bind(this)}
        />
        <RaisedButton
          label="Reset"
          primary={true}
          disabled={this.props.state !== 'SUCCESS' && this.props.state !== 'FAILURE'}
          style={{width: '90%', marginTop: 25}}
          onClick={this.handleResetClick.bind(this)}
        />
        <div className="code">
          <TextField
            value={this.state.code}
            floatingLabelText="Room Code"
            disabled={this.props.state !== 'READY'}
            onChange={this.handleChangePassword.bind(this)}
          /><br />
        </div>
        <RaisedButton
          label="Change Code"
          secondary={true}
          disabled={this.props.state !== 'READY'}
          style={{width: '90%', marginBottom: 10}}
          onClick={this.handleSubmitPassword.bind(this)}
        />
      </div>
    );
  }
}

AdminView.defaultProps = {
};

export default AdminView;
