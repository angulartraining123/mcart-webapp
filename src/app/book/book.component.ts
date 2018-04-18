import { Component, OnInit } from '@angular/core';

import { Book } from './book';
import { BookService } from '../book.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];
  data: Observable<number>;
  myArray: number[] = [];
  errors: boolean;
  finished: boolean;
  errorMessage: string;

  constructor(private bookService: BookService) { }

  fetchData() {
    this.data = new Observable(observer => {
        observer.next(11),
        setTimeout(() => { observer.next(12); }, 1000),
        setTimeout(() => { observer.next(13); }, 2000),
        setTimeout(() => { observer.complete(); }, 3000)
    });

    let sub = this.data.subscribe(
      (value) => {
        this.myArray.push(value)
      },
      (error) => {
        this.errors = true
      },
      () => {
        this.finished = true
      });

  }

  // getBooks() {
  //   this.bookService.getBooks().then(books => this.books = books);
  // }

  getBooks(){
    this.bookService.getBooks().subscribe((res)=>{
      // If Success
      this.books = res.body;
      console.log(res);
    },(error)=>{
      // If error
      this.errorMessage = <any>error
      console.log(this.errorMessage);
    })
  }

  ngOnInit() {
    this.getBooks();
  }
}
