import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubmittedForm } from '../model/form';
import { FormService } from '../service/form.service';

@Component({
	selector: 'app-submitted-form',
	templateUrl: './submitted-form.component.html',
	styleUrls: ['./submitted-form.component.css']
})
export class SubmittedFormComponent implements OnInit {

	form: SubmittedForm = null;
	constructor(
		private activatedRoute: ActivatedRoute,
		private formService: FormService,
	) { }

	ngOnInit(): void {

		this.formService.getSubmittedForm(this.activatedRoute.snapshot.params['id']).subscribe(result => {
			this.form = result;
		});
	}

}
