import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

import { AdministrationModule } from './administration/administration.module';
import { AuthModule } from './auth/auth.module';
import { GamesModule } from './games/games.module';
import { PlayersModule } from './players/players.module';

import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AdministrationModule,
    AuthModule,
    GamesModule,
    PlayersModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

