import React, { Component } from 'react';
import Player from './Player'

import { db } from '../firebase/firebase';

class PlayersList extends Component {
  state = {
    players: [],
    playersLoading: true
  };

  componentDidMount() {
    db.ref().child('players').on('value', snap => {
      const players = []; snap.forEach(shot => {
        players.push({ ...shot.val(), key: shot.key });
      });
      this.setState({ players, playersLoading: false });
    });
  }

  render() {
    const { players, playersLoading } = this.state;

    let playersList;

    if (playersLoading) {
      playersList = <div>Зареждане...</div>;
    } else if (players.length) {
      playersList = (
        <div className="PlayersList mt-2" style={{ width: '50%' }}>
          <h5>Всички играчи</h5>
          <table className="table table-sm">
            <thead className="thead-dark shadow-sm">
              <tr>
                <th scope="col">Име</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {players.map(player => (
                <Player key={player.key} player={player} />
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      playersList = <div>Няма добавени играчи в историята на Клуба</div>;
    }

    return playersList;
  }
}

export default PlayersList;