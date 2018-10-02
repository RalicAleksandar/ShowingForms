import { Component, OnInit } from '@angular/core';
import { FormService } from '../service/form.service';
import { Form } from '../model/form';
import { Router } from '@angular/router';

@Component({
	selector: 'app-forms-list',
	templateUrl: './forms-list.component.html',
	styleUrls: ['./forms-list.component.css']
})
export class FormsListComponent implements OnInit {

	forms: Form[] = [];
	constructor(
		private formService: FormService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.formService.getFomrs().subscribe(result => {
			this.forms = result;
		});
	}

	openForm(form: Form): void {
		this.router.navigate(['/forms/edit/' + form.id]).then();
	}

}
