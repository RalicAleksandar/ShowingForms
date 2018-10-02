import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormItem } from '../../model/form';
@Component({
	selector: 'app-form-item',
	templateUrl: './form-item.component.html',
	styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

	@Input() data: FormItem;
	@Output() removeItem: EventEmitter<void> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	remove(): void {
		this.removeItem.emit();
	}
}
