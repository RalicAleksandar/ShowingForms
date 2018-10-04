import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IsAuthenticatedDirective } from './directives/is-authenticated.directive';

@NgModule({
	imports: [
		CommonModule,
		AngularFontAwesomeModule
	],
	exports: [
		LayoutComponent,
		IsAuthenticatedDirective
	],
	declarations: [LayoutComponent, HeaderComponent, IsAuthenticatedDirective]
})
export class NavBarModule { }
