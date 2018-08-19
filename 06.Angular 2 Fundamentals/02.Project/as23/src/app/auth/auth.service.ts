import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { User } from './model/user';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authState: any = null;
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
      if (this.authState != null) {
        this.user$ = this.db.object<User>(`users/${this.currentUserId}`).valueChanges()
      }
      else {
        this.user$ = EMPTY
      }
    });
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserEmail(): string {
    return (this.authState !== null) ? this.authState.email : ''
  }

  get isUserLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.authState.isAnonymous)) {
      return true
    } else {
      return false
    }
  }

  get isAdmin(): Observable<boolean> {
    return this.user$.pipe(
      take(1),
      map(user => {
        if (user.isAdmin === true) {
          return true;
        } else {
          return false
        }
      }))
  }

  signUpWithEmail(email: string, password: string, firstName: string, lastName: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((currentUser) => {
        var newUser: User = {
          uid: currentUser.user.uid,
          email: currentUser.user.email,
          firstName: firstName,
          lastName: lastName,
          isAdmin: false,
        }
        this.db.object('users/' + currentUser.user.uid).update(newUser);
        this.authState = currentUser;
        if (this.authState != null) {
          this.user$ = this.db.object<User>(`users/${this.currentUserId}`).valueChanges()
        }
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        if (this.authState != null) {
          this.user$ = this.db.object<User>(`users/${this.currentUserId}`).valueChanges()
        }
        else {
          this.user$ = EMPTY
        }
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then((user) => {
        console.log("Email sent")
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.authState = null;
    this.user$ = EMPTY;
    this.router.navigate(['/'])
  }
}