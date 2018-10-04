import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: string;
	pass: string;

	constructor(
		private userService: UserService
	) { }

	ngOnInit(): void {
	}

	login(): void {
		this.userService.login(this.user, this.pass);
	}

}
