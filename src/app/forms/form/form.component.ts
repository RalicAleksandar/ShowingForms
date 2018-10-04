import { Component, OnInit } from '@angular/core';
import { Form, SubmittedForm } from '../model/form';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from '../service/form.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	form: Form = null;
	formValues: SubmittedForm;

	constructor(
		private activatedRoute: ActivatedRoute,
		private formService: FormService,
		private router: Router
	) { }

	ngOnInit(): void {

		this.formService.getForm(this.activatedRoute.snapshot.params['id']).subscribe(result => {
			this.form = result;
			this.formValues = {
				formId: this.form.id,
				submittedBy: '',
				values: new Array(this.form.items.length)
			};
		});
	}

	public save(): void {
		this.formValues.submittedAt = new Date();
		this.formService.submitForm(this.formValues).subscribe(() => {
			this.router.navigate(['submitted']).then();
		});
	}


	get isValid(): boolean {
		if (this.formValues.submittedBy.length === 0) {
			return false;
		}

		return this.formValues.values.every((value, index) => {
			return !this.form.items[index].required || value.length > 0;
		});
	}

}
