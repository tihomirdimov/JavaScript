import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import HomePage from './Home';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import AdministrationPage from './Administration';
import AccountPage from './Account';

import PlayersPage from './Players'
import GamesPage from './Games'


import * as routes from '../constants/routes';

import withAuthentication from './withAuthentication';

const App = () =>

  <Router>
    <div>
      <header>
        <Navigation />
      </header>
      <main className="jumbotron mb-0">
        <Route exact path={routes.HOME} component={() => <HomePage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
        <Route exact path={routes.ADMINISTRATION} component={() => <AdministrationPage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        <Route exact path={routes.PLAYERS} component={() => <PlayersPage />} />
        <Route exact path={routes.GAMES} component={() => <GamesPage />} />
      </main>
      <footer className="fixed-bottom bg-dark text-white">
        <p className="font-weight-light font-italic text-center m-1 p-0">- Чрезъ спорта за Родината -</p>
      </footer>
    </div>
  </Router>

export default withAuthentication(App);
