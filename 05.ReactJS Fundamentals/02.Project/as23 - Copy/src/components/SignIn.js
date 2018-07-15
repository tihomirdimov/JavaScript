import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <h1>Вход</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div>
        <form className="form-inline form-group" onSubmit={this.onSubmit}>
          <label className="mr-sm-2" htmlFor="email">Email</label>
          <input
            className="form-control form-control-sm mr-sm-2"
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            name="email"
            type="text"
            placeholder="Въведи email"
          />
          <label className="mr-sm-2" htmlFor="password">Парола</label>
          <input
            className="form-control form-control-sm mr-sm-2"
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            name="password"
            type="password"
            placeholder="Въведи парола"
          />
          <button className="btn btn-sm btn-outline-danger" disabled={isInvalid} type="submit">
            Вход
        </button>
        </form>
        <div className="row">
          {error && <p>{error.message}</p>}
        </div>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};