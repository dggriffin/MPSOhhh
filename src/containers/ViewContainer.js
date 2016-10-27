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
    base.fetch(`${this.props.baseUrl}/${code}`, {
      context: this,
      then(data){
        if (data) {
          this.setState({state: 'SUCCESS'});
        }
      }
    })
  }

  render() {
    let currentView = () => {
      switch(this.state.state) {
        case 'IN-PROGRESS' :
        case 'READY' :
          return <div>{React.cloneElement(this.props.children, { handleCodeEntry: this.handleCodeEntry.bind(this) })}</div>

        case 'FAILURE' :
          return <FailureView/>

        case 'SUCCESS' :
          return <SuccessView/>
      }
    }
    return (
      <div>
        {currentView()}
      </div>
    );
  }
}

ViewContainer.defaultProps = {
};

export default ViewContainer;
