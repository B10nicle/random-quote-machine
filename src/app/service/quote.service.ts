import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private httpClient: HttpClient) {
  }

  getQuote() {
    return this.httpClient.get('http://localhost:7272', {responseType: 'json'}).pipe(
      retry(3),
      catchError(this.handleError),
      tap(() => {
      })
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error : ${error.error.message}`;
    } else {
      errorMessage = `Error : ${error.status} \nMessage : ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
