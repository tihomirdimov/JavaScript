import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GamesComponent
  ],
  exports:[
    GamesComponent
  ]
})
export class GamesModule { }
