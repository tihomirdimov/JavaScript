import { Component, OnInit, Input } from '@angular/core';
 
import { Player } from '../model/player';
import { PlayerService } from '../player.service';
 
@Component({
  selector: 'player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
 
  @Input() player: Player;
 
  constructor(private playerService: PlayerService) { }
 
  ngOnInit() {
  }
 
  updateActive(isActive: boolean) {
    this.playerService.updatePlayer(this.player.key, { active: isActive });
  }
 
  deletePlayer() {
    this.playerService.deletePlayer(this.player.key);
  }
}