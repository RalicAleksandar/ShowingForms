
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
	{
		path: 'login',
		loadChildren: './login/login.module#LoginModule',
	},
	{
		path: 'forms',
		loadChildren: './forms/forms.module#FormsModule',
	},
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
