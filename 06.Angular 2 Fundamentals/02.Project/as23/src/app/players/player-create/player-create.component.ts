import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { PlayerService } from '../player.service';
 
@Component({
  selector: 'player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
 
  player: Player = new Player();
  submitted = false;
 
  constructor(private playerService: PlayerService) { }
 
  ngOnInit() {
  }
 
  newPlayer(): void {
    this.submitted = false;
    this.player = new Player();
  }
 
  save() {
    this.playerService.createPlayer(this.player);
    this.player = new Player();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}