import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { PlayerService } from '../player.service';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayersList();
  }

  getPlayersList() {
    // Use snapshotChanges().map() to store the key
    this.playerService.getPlayersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(players => {
      this.players = players;
    });
  }

  deletePlayers() {
    this.playerService.deleteAll();
  }

}