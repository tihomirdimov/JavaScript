import React, { Component } from 'react';
import { db } from '../firebase';

class Player extends Component {
  deletePlayer = () => {
    const { key } = this.props.player;
    db.doDeletePlayer(key);
  };

  render() {
    const { player } = this.props;

    return (
      <tr className="PlayerItem">
        <td>{player.firstName + ' ' + player.lastName}</td>
        <td><button className="btn btn-sm btn-outline-danger" onClick={this.deletePlayer}>Изтрий</button></td>
      </tr>
    );
  }
}

export default Player;