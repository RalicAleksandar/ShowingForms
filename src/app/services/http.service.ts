import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	constructor(
		private http: HttpClient,
		private router: Router
	) { }

	post(apiPath: string, data: any = null): Observable<any> {
		return this.http.post<any>(this.apiUrl(apiPath), this.apiData(data), this.headers);
	}

	put(apiPath: string, data: any = null): Observable<any> {
		return this.http
			.put(this.apiUrl(apiPath), this.apiData(data), this.headers)
			.pipe(catchError(this.errorHandler()));
	}

	get(apiPath: string): Observable<any> {
		return this.http
			.get(this.apiUrl(apiPath), this.headers)
			.pipe(catchError(this.errorHandler()));
	}

	delete(apiPath: string): Observable<any> {
		return this.http.delete(this.apiUrl(apiPath), this.headers);
	}

	patch(apiPath: string, data: any = null): Observable<any> {
		return this.http.patch(this.apiUrl(apiPath), this.apiData(data), this.headers);
	}

	public get headers(): any {
		const headers = {
			'Content-Type': 'application/json'
		};

		return { headers: new HttpHeaders(headers) };
	}

	errorHandler(fallBack = {}): any {
		return ((err: HttpErrorResponse) => {
			if (err.error instanceof Error) {
				// A client-side or network error occurred. Handle it accordingly.
				console.error('An error occurred:', err.error.message);
			} else if (err.status === 404) {
				this.router.navigate(['/not-found']).then();
			}
			return of(fallBack);
		});
	}

	private apiUrl = (apiPath) => environment.server + apiPath;
	private apiData = (data) => JSON.stringify(data);
}