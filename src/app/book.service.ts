import { Injectable } from '@angular/core';
import { BOOKS } from './book/books-data';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book/book';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/retry';

@Injectable()
export class BookService {
  public value1 = 12;
  
  constructor(private _http: HttpClient) { }

  // getBooks() {
  //   return Promise.resolve(BOOKS);
  // }

  getBooks(): Observable<HttpResponse<Book[]>> {
    // return this._http.get(url).map(res=>{res=res.json()}).catch()
    return this._http.get<Book[]>("./assets/books.json", { observe: 'response' }).retry(3).pipe(
       tap(data => console.log('Data fetched:'+JSON.stringify(data))),
       catchError(this.handleError));
   }


   private handleError(err:HttpErrorResponse) {
    let errMsg:string='';
    if (err.error instanceof Error) {
       // A client-side or network error occurred. Handle it accordingly.
       console.log('An error occurred:', err.error.message);
        errMsg=err.error.message;} 
       else {
       // The backend returned an unsuccessful response code.
       // The response body may contain clues as to what went wrong,
       console.log(`Backend returned code ${err.status}`);
          errMsg=err.error.status;
     }
        return Observable.throw(errMsg); 
  }

 
}
