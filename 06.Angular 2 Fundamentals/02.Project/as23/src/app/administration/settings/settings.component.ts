import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onRequestPasswordResetEmail() {
    const email = this.authService.currentUserEmail
    this.authService.resetPassword(email)
      .then(() => {
        this.authService.signOut()
      }).catch(_error => {
        this.router.navigate(['/'])
      })
  }
}