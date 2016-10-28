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

    base.listenTo(`${this.props.baseUrl}/state`, {
      context: this,
      then(state) {
        if (state === 'SUCCESS' || state === 'FAILURE') {
          base.post(`participants/${this.state.data.participant}/${this.props.baseUrl}Time`, {
            context: this,
            data: this.state.data.time
          });
        }
      }
    })
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

  handleViewStart(participant) {
    base.post(`${this.props.baseUrl}`, {
      context: this,
      data: {
        ...this.state.data,
        state: 'IN-PROGRESS',
        participant: this.state.participants[participant]
      }
    });
  }

  handleChangePassword(code) {
    base.post(`${this.props.baseUrl}/code`, {
      context: this,
      data: code
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
            title: this.props.title,
            code: this.state.data.code,
            handleViewStart: this.handleViewStart.bind(this),
            handleViewReset: this.handleViewReset.bind(this),
            handleChangePassword: this.handleChangePassword.bind(this)
          })
        }
      </div>
    );
  }
}

AdminContainer.defaultProps = {
};

export default AdminContainer;
