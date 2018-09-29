import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
	imports: [
		CommonModule,
		AngularFontAwesomeModule
	],
	exports: [
		LayoutComponent
	],
	declarations: [LayoutComponent, HeaderComponent]
})
export class NavBarModule { }
