import { Component, OnInit, Input } from '@angular/core';
import { FormItem } from '../../model/form';

@Component({
	selector: 'app-form-item',
	templateUrl: './form-item.component.html',
	styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

	@Input() data: FormItem;

	constructor() { }

	ngOnInit(): void {
	}

}
