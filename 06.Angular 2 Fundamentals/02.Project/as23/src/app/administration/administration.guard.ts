import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})

export class AdministrationGuard implements CanActivate {

  constructor(private authService: AuthService, public router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.user$.pipe(
      map(user => user.isAdmin))
  }
}