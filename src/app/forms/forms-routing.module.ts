import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsListComponent } from './forms-list/forms-list.component';
import { SubmittedFormsComponent } from './submitted-forms/submitted-forms.component';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';
import { FormComponent } from './form/form.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { AuthGuardService } from './service/auth-guard.service';
const routes: Routes = [
	{
		path: '',
		component: FormsListComponent,
	},
	{
		path: 'submitted',
		canActivate: [AuthGuardService],
		component: SubmittedFormsComponent,
	},
	{
		path: 'submitted/:id',
		canActivate: [AuthGuardService],
		component: SubmittedFormComponent,
	},
	{
		path: 'submit/:id',
		component: FormComponent,
	},
	{
		path: 'new',
		canActivate: [AuthGuardService],
		component: FormDetailsComponent,
	},
	{
		path: 'edit/:id',
		canActivate: [AuthGuardService],
		component: FormDetailsComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FormsRoutingModule { }
