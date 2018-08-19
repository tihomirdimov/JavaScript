
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

import { HomeComponent } from '../administration/home/home.component';
import { AdministrationComponent } from '../administration/administration/administration.component';
import { SettingsComponent } from '../administration/settings/settings.component';

import { GamesComponent } from '../games/games/games.component';

import { AdministrationGuard } from '../administration/administration.guard';
import { PlayersSectionComponent } from '../players/players-section/players-section.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'administration', component: AdministrationComponent, canActivate: [AdministrationGuard] },
  { path: 'settings', component: SettingsComponent },
  { path: 'players-section', component: PlayersSectionComponent },
  { path: 'games', component: GamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }