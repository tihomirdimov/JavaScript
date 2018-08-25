import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game-model/game';
import { GameService } from '../game.service';
 
@Component({
  selector: '[game-details]',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
 
  @Input() game: Game;
 
  constructor(private gameService: GameService) { }
 
  isEditing = false;

  ngOnInit() {
  }
 
  enableEditing() {
    this.isEditing = true;
  }

  disableEditing() {
    this.isEditing = false;
  }

  onSubmit() {
    this.update();
    this.isEditing = false;
  }

  update() {
    this.gameService.updateGame(this.game.key, {
      rival: this.game.rival,
      date: this.game.date,
      isAway: this.game.isAway,
      result: this.game.result
    });
  }
 
  deleteGame() {
    this.gameService.deleteGame(this.game.key);
  }
}