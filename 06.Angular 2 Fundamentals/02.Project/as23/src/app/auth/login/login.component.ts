import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onSignIn(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    this.authService.loginWithEmail(email, password)
      .then(() => this.router.navigate(['/players']))
      .catch(_error => {
        this.router.navigate(['/']);
      })
  }
}