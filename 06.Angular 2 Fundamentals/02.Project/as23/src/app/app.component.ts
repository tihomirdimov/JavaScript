import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'ОСК Атлетик Слава 1923';

  constructor(public authService: AuthService) {
  }

  logOut() {
    this.authService.signOut();
  }
}
