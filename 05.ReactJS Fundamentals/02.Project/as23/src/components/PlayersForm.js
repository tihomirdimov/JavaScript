import React, { Component } from 'react';
import { db } from '../firebase';

const INITIAL_STATE = { firstName: '', lastName: '' };

export default class PlayersForm extends Component {
  state = INITIAL_STATE;

  handleSubmit = event => {
    event.preventDefault();

    const newPlayer = {
      firstName: this.state.firstName.trim(),
      lastName: this.state.lastName.trim(),
    };

    if (newPlayer.firstName.length && newPlayer.lastName.length) {
      db.doCreatePlayer(newPlayer.firstName, newPlayer.lastName);
      this.setState(INITIAL_STATE);
    }
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleChange = event => {
    this.setState({ firstName: event.target.value });
    this.setState({ lastName: event.target.value });
  };

  handleFirstNameChange = event => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = event => {
    this.setState({ lastName: event.target.value });
  };

  render() {
    return (
      <div>
        <h5>Добави играч</h5>
        <form onSubmit={this.handleSubmit} className="TaskInput form-inline form-group">
          <label className="mr-sm-2" htmlFor="firstName">Име</label>
          <input
            className="form-control form-control-sm mr-sm-2"
            onChange={this.handleFirstNameChange.bind(this)}
            value={this.state.firstName}
            name="firstName"
            type="text"
            placeholder="Името на играча"
            required
          />
          <label className="mr-sm-2" htmlFor="lastName">Фамилия</label>
          <input
            className="form-control form-control-sm mr-sm-2"
            onChange={this.handleLastNameChange.bind(this)}
            value={this.state.lastName}
            name="lastName"
            type="text"
            placeholder="Фамилията на играча"
            required
          />
          <button className="btn btn-sm" type="submit">
            Добави Играч
        </button>
        </form>
      </div>
    );
  }
}