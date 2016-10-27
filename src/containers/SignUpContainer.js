import React from 'react';
import SignUpView from '../components/SignUpView';

const Rebase = require('re-base');
const base = Rebase.createClass({
      apiKey: 'AIzaSyBrgyl-UXdpEFISSGnf1isc_TkrVB2S0Hs',
      authDomain: 'mpsohhh.firebaseapp.com',
      databaseURL: 'https://mpsohhh.firebaseio.com',
      storageBucket: ''
});

class SignUpContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  submitSignUpInfo(firstName, lastName, teamName) {
    let ref = base.push('participants', {
      context: this,
      data: {
        firstName,
        lastName,
        teamName
      }
    });

    base.post(`nameMap/${firstName} ${lastName} (${teamName})`, {
      context: this,
      data: ref.key
    });
  }

  render() {
    return (
      <div>
        {<SignUpView submitSignUpInfo={this.submitSignUpInfo.bind(this)}/>}
      </div>
    );
  }
}

SignUpContainer.defaultProps = {
};

export default SignUpContainer;
