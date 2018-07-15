import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = ({ authUser }) =>
  <div>
    {authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </div>


const NavigationAuth = () =>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top shadow">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link to={routes.HOME} className="nav-link">Начало</Link></li>
      <li className="nav-item"><Link to={routes.PLAYERS} className="nav-link">Играчи</Link></li>
      <li className="nav-item"><Link to={routes.GAMES} className="nav-link">Мачове</Link></li>
    </ul>
    <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
      <img className="navbar-brand p-0" src={logo} alt="logo" style={{ width: 35 }} />
      <span className="navbar-text text-danger p-0 ">ОСК Атлетик Слава 1923</span>
    </div>
    <ul className="navbar-nav ml-auto align-items-center">
      <li className="nav-item"><Link to={routes.ADMINISTRATION} className="nav-link">Администрация</Link></li>
      <li className="nav-item"><Link to={routes.ACCOUNT} className="nav-link">Настройки</Link></li>
      <SignOutButton />
    </ul>
  </nav>

const NavigationNonAuth = () =>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top shadow">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link to={routes.HOME} className="nav-link">Начало</Link></li>
    </ul>
    <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
      <img className="navbar-brand p-0" src={logo} alt="logo" style={{ width: 35 }} />
      <span className="navbar-text text-danger p-0 ">ОСК Атлетик Слава 1923</span>
    </div>
    <ul className="navbar-nav ml-auto align-items-center">
      <li className="nav-item"><Link to={routes.SIGN_IN} className="nav-link">Влез</Link></li>
    </ul>
  </nav>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);