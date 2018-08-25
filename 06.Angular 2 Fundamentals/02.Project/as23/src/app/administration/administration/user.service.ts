import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../../auth/model/user';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private dbPath = '/users';
 
  usersRef: AngularFireList<User> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list(this.dbPath);
  }
 
  updateUser(key: string, value: any): void {
    this.usersRef.update(key, value).catch(error => this.handleError(error));
  }
 
  getUsersList(): AngularFireList<User> {
    return this.usersRef;
  }
 
  private handleError(error) {
    console.log(error);
  }
}