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

	public updateForm(form: Form): Observable<any> {
		return this.httpService.patch('form', form);
	}

	public submitForm(form: SubmittedForm): Observable<any> {
		return this.httpService.post('submit', form);
	}

	public getSubmittedForms(): Observable<SubmittedForm[]> {
		return this.httpService.get('submitted');
	}

	public getSubmittedForm(id: string): Observable<SubmittedForm> {
		return this.httpService.get('submitted/' + id);
	}
}
