import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _base_url = 'https://jsonplaceholder.typicode.com';
  constructor(private _http: HttpClient) {}

  get(url: string, params: Object = null ): Observable<any> {
    const options: any = {};
    if (params) {
      options.params = this.generateQueryParams(params); 
    }
    
    return this._http
      .get(`${this._base_url}/${url}`, options)
      .pipe(catchError(this.handleError));
  }

  post(url: string, data: any): Observable<any> {
    return this._http.post(`${this._base_url}/${url}`, data, { })
      .pipe(catchError(this.handleError)); 
  }

  put(url: string, data: any): Observable<any> {
    return this._http.put(`${this._base_url}/${url}`, data)
      .pipe(catchError(this.handleError));
  }

  delete(url: string): Observable<any> {
    return this._http.delete(`${this._base_url}/${url}`)
      .pipe(catchError(this.handleError));
  }

  private generateQueryParams(params: any) {
    return new HttpParams({ fromObject: params });
  }
 
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
