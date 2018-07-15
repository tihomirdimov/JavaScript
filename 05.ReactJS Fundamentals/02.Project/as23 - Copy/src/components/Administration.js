import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class AdministrationPage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot =>
      onSetUsers(snapshot.val())
    );
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>Административен Панел</h1>
        <h5>Всички фенове-автентици</h5>
        {!!users && <UserList users={users} />}
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div style={{ width: '50%' }}>
    <table className="table table-sm">
      <thead className="thead-dark shadow-sm">
        <tr>
          <th scope="col">Име</th>
          <th scope="col">Имейл</th>
          <th scope="col">Активен</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(users).map(key =>
          <tr key={key}>
            <td>{users[key].username} </td>
            <td>{users[key].email}</td>
            <td>{users[key].roles.isAdmin.toString()}</td>
          </tr>)}
      </tbody>
    </table>
  </div>

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users })
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(AdministrationPage);