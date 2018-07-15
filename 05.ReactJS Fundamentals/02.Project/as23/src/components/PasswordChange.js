import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <div>
        <h5>Промяна на парола</h5>
        <form className="form-inline form-group" onSubmit={this.onSubmit}>
          <label className="mr-sm-2" htmlFor="newPassword">Нова парола</label>
          <input
            className="form-control form-control-sm mr-sm-2"
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            name="newPassword"
            type="password"
            placeholder="Въведи нова парола"
          />
          <label className="mr-sm-2" htmlFor="confirmNewPassword">Потвърди нова парола</label>
          <input
            className="form-control form-control-sm mr-sm-2"
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            name="confirmNewPassword"
            type="password"
            placeholder="Потвърди нова парола"
          />
          <button className="btn btn-sm btn-danger" disabled={isInvalid} type="submit">Промени парола</button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default PasswordChangeForm;