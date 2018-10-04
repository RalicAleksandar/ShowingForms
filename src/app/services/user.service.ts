import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private auth: boolean;

	constructor(
		private router: Router
	) {
		this.auth = localStorage.getItem('auth') === 'true';
	}

	public isAuthenticated(): boolean {
		return this.auth;
	}

	public login(user: string, pass: string): void {
		if (user === 'admin' && pass === 'admin') {
			this.auth = true;
			localStorage.setItem('auth', 'true');
			this.router.navigate(['/']).then();
			window.location.reload();
		}
	}

	public logout(): void {
		this.auth = false;
		localStorage.setItem('auth', 'false');
		this.router.navigate(['/']).then();
		window.location.reload();
	}
}
