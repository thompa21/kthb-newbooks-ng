import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

//const newbooksendpoint = 'https://apps.lib.kth.se/webservices/primo/api/v1/';
const newbooksendpoint = 'http://hyper-v1.lib.kth.se/primo/api/v1/';
const primoxserviceendpoint = 'https://pmt-eu.hosted.exlibrisgroup.com/PrimoWebServices/xservice/search/brief/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getNewBooks(): Observable<any> {
    return this.http.get(newbooksendpoint + 'newbooks?limit=none').pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
