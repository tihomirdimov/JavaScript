import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GamesSectionComponent } from './games-section/games-section.component';
import { GamesComponent } from './games/games.component';
import { GameCreateComponent } from './game-create/game-create.component';
import { GameDetailsComponent } from './game-details/game-details.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    GamesComponent,
    GamesSectionComponent,
    GameCreateComponent,
    GameDetailsComponent
  ],
  exports:[
    GamesComponent,
    GamesSectionComponent,
    GameCreateComponent,
    GameDetailsComponent
  ]
})
export class GamesModule { }
