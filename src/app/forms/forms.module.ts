import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsListComponent } from './forms-list/forms-list.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { FormComponent } from './form/form.component';
import { SubmittedFormsComponent } from './submitted-forms/submitted-forms.component';
import { FormsRoutingModule } from './forms-routing.module';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';

@NgModule({
	imports: [
		CommonModule,
		FormsRoutingModule
	],
	declarations: [FormsListComponent, FormDetailsComponent, FormComponent, SubmittedFormsComponent, SubmittedFormComponent]
})
export class FormsModule { }
