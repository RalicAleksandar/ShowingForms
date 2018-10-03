import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { SubmittedFormSummary, SubmittedForm, ItemType, Form } from '../model/form';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpService } from '../../services/http.service';

@Injectable({
	providedIn: 'root'
})
export class FormService {

	constructor(
		private httpService: HttpService
	) { }

	public getFomrs(): Observable<Form[]> {
		return this.httpService.get('forms');
	}

	public getForm(id: string): Observable<Form> {
		return this.httpService.get('form/' + id);
	}

	public createForm(form: Form): Observable<any> {
		return this.httpService.post('form', form);
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
