
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './forms/service/auth-guard.service';


const routes: Routes = [
	{
		path: '',
		loadChildren: './forms/form.module#FormModule',
	},
	{
		path: 'login',
		loadChildren: './login/login.module#LoginModule',
	},
	{
		path: 'forms',
		loadChildren: './forms/form.module#FormModule',
	},
	{
		path: 'not-found',
		component: NotFoundComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
