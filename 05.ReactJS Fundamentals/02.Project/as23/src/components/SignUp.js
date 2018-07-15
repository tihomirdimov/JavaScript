import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import { auth, db } from '../firebase';

import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div>
    <h1>Регистрация</h1>
    <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form className="form-group" onSubmit={this.onSubmit}>
        <label className="mt-sm-1 mb-sm-1" htmlFor="username">Име и Фамилия</label>
        <input
          className="form-control form-control-sm"
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          name="username"
          type="text"
          placeholder="Въведи две имена"
        />
        <label className="mt-sm-1 mb-sm-1" htmlFor="email">Email</label>
        <input
          className="form-control form-control-sm"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          name="email"
          type="text"
          placeholder="Въведи email"
        />
        <label className="mt-sm-1 mb-sm-1" htmlFor="password">Парола</label>

        <input
          className="form-control form-control-sm"
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          name="password"
          type="password"
          placeholder="Въведи парола"
        />
        <label className="mt-sm-1 mb-sm-1" htmlFor="repeatPassword">Повтори парола</label>
        <input
          className="form-control form-control-sm"
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          name="repeatPassword"
          type="password"
          placeholder="Потвръди парола"
        />
        <button className="btn btn-sm btn-outline-danger mt-sm-4" disabled={isInvalid} type="submit">
          Регистрация
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () =>
  <h6>
    <Link className="small text-danger text-uppercase" to={routes.SIGN_UP}>Регистрация</Link>
  </h6>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};