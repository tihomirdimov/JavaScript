import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';

class AdministrationPage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    // get all available users in the system

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

// list with all available users in the system. could be created as new component

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
            {/* // select or on/off  control to be implemented allowing the admin to set otther users as admins/not admins */}
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

// Below logic to be extended with '&& authUser.isAdmin == true in order

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(AdministrationPage);