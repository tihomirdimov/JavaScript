import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onRegister(f: NgForm) {
    const email = f.value.email;
    const firstName = f.value.firstName;
    const lastName = f.value.lastName;
    const password = f.value.password;
    this.authService.signUpWithEmail(email, password, firstName, lastName)
      .then(() => {
        this.router.navigate(['/'])
      }).catch(_error => {
        this.router.navigate(['/'])
      })
  }
}