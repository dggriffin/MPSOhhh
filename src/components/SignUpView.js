require('styles/App.css');

import React from 'react';
import {RaisedButton, TextField} from 'material-ui';


class SignUpView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      teamName: ''
    };
  }

  handleOnClick() {
    this.props.submitSignUpInfo(this.state.firstName, this.state.lastName, this.state.teamName);
    this.setState({firstName: '', lastName: '', teamName: ''});
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

  handleTeamChange(event) {
    this.setState({teamName: event.target.value});
  }

  render() {
    return (
      <div className="sign-up">
        <div className="title">
          Participant Sign-Up
        </div>
        <div>
          <TextField
            onChange={this.handleFirstNameChange.bind(this)}
            value={this.state.firstName}
            floatingLabelText="First Name"
          /><br />
          <TextField
            onChange={this.handleLastNameChange.bind(this)}
            value={this.state.lastName}
            floatingLabelText="Last Name"
          /><br />
          <TextField
            onChange={this.handleTeamChange.bind(this)}
            value={this.state.teamName}
            floatingLabelText="Work Team Name"
          /><br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={{width: '100%', marginTop: 25}}
            onClick={this.handleOnClick.bind(this)}
          />
        </div>

      </div>
    );
  }
}

SignUpView.defaultProps = {
};

export default SignUpView;
