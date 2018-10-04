import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanLoad, CanActivate {

	constructor(
		private userService: UserService
	) { }

	canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
		return this.userService.isAuthenticated();
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		return this.userService.isAuthenticated();
	}
}
