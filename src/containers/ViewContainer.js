import React from 'react';

import FailureView from '../components/FailureView';
import SuccessView from '../components/SuccessView';

const Rebase = require('re-base');
const base = Rebase.createClass({
      apiKey: 'AIzaSyBrgyl-UXdpEFISSGnf1isc_TkrVB2S0Hs',
      authDomain: 'mpsohhh.firebaseapp.com',
      databaseURL: 'https://mpsohhh.firebaseio.com',
      storageBucket: ''
});

let Sound = require('react-sound');

class ViewContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      state: 'READY',
      timer: '5:00'
    };
  }

  componentDidMount(){
    base.syncState(`${this.props.baseUrl}/state`, {
      context: this,
      state: 'state'
    });

    base.listenTo(`${this.props.baseUrl}/state`, {
      context: this,
      then(state) {
        if (state === 'IN-PROGRESS') {

        }
      }
    })
  }

  handleCodeEntry(code) {
    base.fetch(`${this.props.baseUrl}/code`, {
      context: this,
      then(data){
        if (data === code) {
          this.setState({state: 'SUCCESS'});
        }
      }
    })
  }

  getAudio() {
    let audio = '';
    switch (this.props.baseUrl) {
      case 'quantity' :
        audio = '../images/D&C Halloween Audio/Circus Mockery2.mp3';
        break;

      case 'matching' :
        audio = '../images/D&C Halloween Audio/Final - Latin Chanting Overlapped.mp3';
        break;

      case 'stock' :
        audio = "../images/D&C Halloween Audio/Witch's Hut.mp3";
        break;
    }
    return <Sound
      url={audio}
      playStatus={this.state.state && (this.state.state === 'IN-PROGRESS' || this.state.state === 'FAILURE') ? Sound.status.PLAYING : Sound.status.STOPPED}
      playFromPosition={0}/>
  }

  render() {
    let currentView = () => {
      switch(this.state.state) {
        case 'IN-PROGRESS' :
        case 'READY' :
          return <div>{React.cloneElement(this.props.children, { state: this.state.state, handleCodeEntry: this.handleCodeEntry.bind(this) })}</div>

        case 'FAILURE' :
          return <FailureView/>

        case 'SUCCESS' :
          return <SuccessView/>
      }
    }
    return (
      <div>
        {this.getAudio()}
        {currentView()}
      </div>
    );
  }
}

ViewContainer.defaultProps = {
};

export default ViewContainer;
