import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import { VideoCategory } from '../video/video';
import { BookCategory } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  implements OnInit {
  constructor(private activeRoute:ActivatedRoute,private libraryService:LibraryService){}
  booksAlist!:BookCategory[];
  department:any;

  ngOnInit(): void {
    this.department=this.activeRoute.snapshot.paramMap.get('department');
    this.OnBookCategory();

  }


  OnBookCategory():void{
    this.libraryService.bookCategory().subscribe(

      (response)=>{
        this.booksAlist=response.filter((category)=>category.category==this.department);
        console.log(this.booksAlist);


      }
    );
    }

    ishidden= false;
    onhidden($event:boolean){
      this.ishidden = $event;
      console.log(this.ishidden);}
}
