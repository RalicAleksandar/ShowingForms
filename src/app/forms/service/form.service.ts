import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SubmittedFormSummary, SubmittedForm, ItemType } from '../model/form';
import { of } from 'rxjs/Observable/of';

@Injectable({
	providedIn: 'root'
})
export class FormService {

	constructor() { }

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
