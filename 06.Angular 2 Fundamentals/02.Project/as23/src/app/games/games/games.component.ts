import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GameService } from '../game.service';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: any;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGamesList();
  }

  getGamesList() {
    // Use snapshotChanges().map() to store the key
    this.gameService.getGamesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(games => {
      this.games = games;
    });
  }

  deleteGames() {
    this.gameService.deleteAll();
  }

}