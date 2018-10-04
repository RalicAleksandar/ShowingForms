import { Directive, ElementRef, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Directive({
	selector: '[appIsAuthenticated]'
})
export class IsAuthenticatedDirective implements OnInit {

	constructor(
		private el: ElementRef,
		private userService: UserService
	) { }

	ngOnInit(): void {
		const element = this.el.nativeElement as HTMLElement;
		if (!this.userService.isAuthenticated()) {
			element.remove();
		}
	}
}
