import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
	imports: [
		CommonModule,
		LoginRoutingModule
	],
	declarations: [LoginComponent]
})
export class LoginModule { }

