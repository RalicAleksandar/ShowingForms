import { Component, OnInit, Input } from '@angular/core';
import { FormItem, Form, ItemType } from '../model/form';

@Component({
	selector: 'app-form-details',
	templateUrl: './form-details.component.html',
	styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

	form: Form;

	constructor() {
		this.form = new Form();
	}

	ngOnInit(): void {
	}

	addInput(): void {
		this.form.items.push(new FormItem(ItemType.INPUT));
	}

	addCheckbox(): void {
		this.form.items.push(new FormItem(ItemType.CHECKBOX));
	}
}
