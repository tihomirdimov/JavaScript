import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';

const PasswordForgetPage = () =>
  <div>
    <h1>Забравена парола</h1>
    <PasswordForgetForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
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
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form className="form-inline form-group" onSubmit={this.onSubmit}>
        <label className="mr-sm-2" htmlFor="newPassword">Email</label>
        <input
          className="form-control form-control-sm mr-sm-2"
          value={this.state.email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          name="email"
          type="text"
          placeholder="Въведи email"
        />
        <button className="btn btn-sm btn-outline-danger" disabled={isInvalid} type="submit">
          Заяви промяна
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <h6>
    <Link className="small text-danger text-uppercase font-weight-light" to="/forget-password">забравена парола</Link>
  </h6>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};