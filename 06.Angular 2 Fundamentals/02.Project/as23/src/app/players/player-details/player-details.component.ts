import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player-model/player';
import { PlayerService } from '../player.service';

@Component({
  selector: '[player-details]',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  @Input() player: Player;

  constructor(private playerService: PlayerService) { }

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
    this.playerService.updatePlayer(this.player.key, {
      firstName: this.player.firstName,
      lastName: this.player.lastName,
      position: this.player.position
    });
  }

  deletePlayer() {
    this.playerService.deletePlayer(this.player.key);
  }
}