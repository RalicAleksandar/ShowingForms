import { Component, OnInit } from '@angular/core';
import { FormService } from '../service/form.service';
import { SubmittedFormSummary } from '../model/form';
import { Router } from '@angular/router';

@Component({
	selector: 'app-submitted-forms',
	templateUrl: './submitted-forms.component.html',
	styleUrls: ['./submitted-forms.component.css']
})
export class SubmittedFormsComponent implements OnInit {

	forms: SubmittedFormSummary[] = [];

	constructor(
		private formService: FormService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.formService.getSubmittedForms().subscribe(result => {
			this.forms = result;
		});
	}

	viewForm(form: SubmittedFormSummary): void {
		this.router.navigate(['/forms/submitted/' + form.id]).then();
	}
}
