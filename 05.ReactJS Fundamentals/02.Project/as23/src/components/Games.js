import React, { Component } from 'react';
import GamesForm from './GamesForm';
import GamesList from './GamesList';

import withAuthorization from './withAuthorization';
import { compose } from 'recompose';

class GamesPage extends Component {
  render() {
    return (
      <div>
        <h1>Срещи</h1>
        <GamesForm />
        <GamesList />
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;
// && authUser.roles.isAdmin === 'true'

export default compose(
  withAuthorization(authCondition)
)(GamesPage);