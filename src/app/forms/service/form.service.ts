import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { SubmittedFormSummary, SubmittedForm, ItemType, Form } from '../model/form';

@Injectable({
	providedIn: 'root'
})
export class FormService {

	constructor() { }

	public getFomrs(): Observable<Form[]> {
		const f = new Form();
		f.id = 'asddd';
		f.name = 'Tralalal23';
		return of([f, f, f, f, f]);
	}

	public getForm(id: string): Observable<Form> {
		const f = new Form();
		f.name = 'Tralalal';
		f.items = [
			{
				label: 'l1',
				required: true,
				type: ItemType.INPUT
			},
			{
				label: 'l4',
				required: false,
				type: ItemType.INPUT
			},
			{
				label: 'l2',
				required: true,
				type: ItemType.INPUT
			},
			{
				label: 'l3',
				required: true,
				type: ItemType.CHECKBOX
			}
		];
		return of(f);
	}

	public getSubmittedForms(): Observable<SubmittedFormSummary[]> {
		return of([
			{
				id: '1',
				formName: 'Form 42',
				submittedBy: 'Ralic',
				submittedAt: new Date()
			},
			{
				id: '3',
				formName: 'Form 42',
				submittedBy: 'Ralic',
				submittedAt: new Date()
			},
			{
				id: '4',
				formName: 'Form 42',
				submittedBy: 'Ralic',
				submittedAt: new Date()
			},
			{
				id: '2',
				formName: 'Form 42',
				submittedBy: 'Ralic',
				submittedAt: new Date()
			},
			{
				id: '3',
				formName: 'Form 42',
				submittedBy: 'Ralic',
				submittedAt: new Date()
			},
			{
				id: '5',
				formName: 'Form 42',
				submittedBy: 'Ralic',
				submittedAt: new Date()
			}
		]);
	}

	public getSubmittedForm(id: string): Observable<SubmittedForm> {
		return of({
			id: '31',
			formName: 'Form 42',
			submittedBy: 'Ralic',
			submittedAt: new Date(),
			items: [
				{
					type: ItemType.INPUT,
					name: 'Koliko?',
					value: 'yuuup'
				},
				{
					type: ItemType.CHECKBOX,
					name: 'Duvas?',
					value: true
				},
				{
					type: ItemType.INPUT,
					name: 'Koliko?',
					value: 'yuuup'
				},
				{
					type: ItemType.CHECKBOX,
					name: 'Duvas?',
					value: false
				},
			]

		});
	}
}
