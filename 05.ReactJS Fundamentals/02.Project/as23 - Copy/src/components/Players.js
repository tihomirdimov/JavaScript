import React, { Component } from 'react';
import PlayersForm from './PlayersForm';
import PlayersList from './PlayersList';

import withAuthorization from './withAuthorization';
import { compose } from 'recompose';


class PlayersPage extends Component {
    render() {
        return (
            <div>
                <h1>Играчи</h1>
                <PlayersForm />
                <PlayersList />
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition)
)(PlayersPage);