import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';





@Injectable()
export class PlanteGuard implements CanActivate {
  constructor (private authService: AuthService,
  private router : Router) {}
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  if (this.authService.isAdmin())
  return true;
  else
  {
  this.router.navigate(['app-forbidden']);
  return false;
  }
  }
}  