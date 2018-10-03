import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormItem, Form, ItemType } from '../model/form';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../service/form.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Component({
	selector: 'app-form-details',
	templateUrl: './form-details.component.html',
	styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

	form: Form = null;

	constructor(
		private activatedRoute: ActivatedRoute,
		private formService: FormService,
		private cd: ChangeDetectorRef
	) { }

	ngOnInit(): void {
		this.loadForm().subscribe(result => {
			this.form = result;
			this.cd.detectChanges();
		});
	}

	loadForm(): Observable<Form> {
		const id = this.activatedRoute.snapshot.params['id'];
		return !!id ? this.formService.getForm(id) : of(new Form());
	}

	addInput(): void {
		this.form.items.push(new FormItem(ItemType.INPUT));
	}

	addCheckbox(): void {
		this.form.items.push(new FormItem(ItemType.CHECKBOX));
	}

	removeItem(idx: number): void {
		this.form.items.splice(idx, 1);
	}

	create(): void {
		this.formService.createForm(this.form).subscribe();
	}
}
