import { Component, OnInit } from '@angular/core';
import { Game } from '../game-model/game';
import { GameService } from '../game.service';

@Component({
  selector: 'game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})

export class GameCreateComponent implements OnInit {
 
  game: Game = new Game();
 
  constructor(private gameService: GameService) { }
 
  ngOnInit() {
  }
 
  newGame(): void {
    this.game = new Game();
  }
 
  save() {
    this.gameService.createGame(this.game);
    this.game = new Game();
  }
 
  onSubmit() {
    this.save();
  }
}