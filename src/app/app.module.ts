import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
	],
	imports: [
		BrowserModule,
		NavBarModule,
		AppRoutingModule,
		NgbModule,
		AngularFontAwesomeModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
