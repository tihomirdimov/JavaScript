import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../auth/model/user';
import { UserService } from '../user.service';
 
@Component({
  selector: '[user-details]',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  @Input() user: User;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
  }
 
  toggleAdmin(isAdmin: boolean) {
    this.userService.updateUser(this.user.uid, { isAdmin: isAdmin });
  }

}
