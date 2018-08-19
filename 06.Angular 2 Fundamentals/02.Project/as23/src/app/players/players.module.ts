import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCreateComponent } from './player-create/player-create.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { FormsModule } from '@angular/forms';
import { PlayersSectionComponent } from './players-section/players-section.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PlayerCreateComponent,
    PlayerDetailsComponent,
    PlayersComponent,
    PlayersSectionComponent
  ],
  exports: [
    PlayerCreateComponent,
    PlayerDetailsComponent,
    PlayersComponent,
    PlayersSectionComponent
  ]
})
export class PlayersModule { }
