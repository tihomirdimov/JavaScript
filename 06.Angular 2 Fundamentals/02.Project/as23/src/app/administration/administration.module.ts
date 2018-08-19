import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationComponent } from './administration/administration.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdministrationComponent,
    HomeComponent,
    SettingsComponent,
  ],
  exports: [
    AdministrationComponent,
    HomeComponent,
    SettingsComponent,
  ]
})
export class AdministrationModule { }
