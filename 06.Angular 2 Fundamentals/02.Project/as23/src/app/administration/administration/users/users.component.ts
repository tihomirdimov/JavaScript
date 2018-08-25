import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    // Use snapshotChanges().map() to store the key
    this.userService.getUsersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(users => {
      this.users = users;
    });
  }
}
