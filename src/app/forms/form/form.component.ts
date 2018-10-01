import { Component, OnInit } from '@angular/core';
import { Form } from '../model/form';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../service/form.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	form: Form = null;
	constructor(
		private activatedRoute: ActivatedRoute,
		private formService: FormService,
	) { }

	ngOnInit(): void {

		this.formService.getForm(this.activatedRoute.snapshot.params['id']).subscribe(result => {
			this.form = result;
		});
	}


}
