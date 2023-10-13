import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import { Book } from '../book/book';

@Component({
  selector: 'app-book-reader',
  templateUrl: './book-reader.component.html',
  styleUrls: ['./book-reader.component.css']
})
export class BookReaderComponent {
  constructor(private activatedRoute:ActivatedRoute,private libraryService:LibraryService) {}
bookId:any;
book!:Book;

ngOnInit(): void {

  this.bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
  this.onGetBookById();



}

onGetBookById():void{
this.libraryService.getBookById(Number(this.bookId)).subscribe(
 (response)=>{
  this.book=response;
  console.log(response);
 },
 (error)=>console.log(error)
);
}
}

// get book category by id



