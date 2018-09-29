import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsListComponent } from './forms-list/forms-list.component';
import { SubmittedFormsComponent } from './submitted-forms/submitted-forms.component';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';
import { FormComponent } from './form/form.component';
import { FormDetailsComponent } from './form-details/form-details.component';

const routes: Routes = [
	{
		path: '',
		component: FormsListComponent,
	},
	{
		path: 'submitted',
		component: SubmittedFormsComponent,
	},
	{
		path: 'submitted/:id',
		component: SubmittedFormComponent,
	},
	{
		path: 'submit/:id',
		component: FormComponent,
	},
	{
		path: 'new',
		component: FormDetailsComponent,
	},
	{
		path: 'edit/:id',
		component: FormDetailsComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FormsRoutingModule { }
