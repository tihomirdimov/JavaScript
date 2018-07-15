import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = ({ authUser }) => 
  <div>
    <h1>Настройки</h1>
    <h5>Фен-автеник</h5>
    <h6 className="text-danger font-weight-bold">{authUser.email}</h6>
    <PasswordChangeForm />
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);