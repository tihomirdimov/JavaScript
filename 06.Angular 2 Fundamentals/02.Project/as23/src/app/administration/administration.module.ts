import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationComponent } from './administration/administration.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './administration/users/users.component';
import { UserDetailsComponent } from './administration/user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdministrationComponent,
    HomeComponent,
    SettingsComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  exports: [
    AdministrationComponent,
    HomeComponent,
    SettingsComponent,
    UsersComponent,
    UserDetailsComponent
  ]
})
export class AdministrationModule { }
