import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  constructor(private libraryService:LibraryService){}
  videoCategory!:any[]
  bookCategory!:any[]

  ngOnInit(): void {
 this.OnVideoCategory();
 this.OnBookCategory();
  }

  OnVideoCategory():void{
  this.libraryService.videoCategory().subscribe(

    (response)=>{
      const Vcategory=response.map((departments)=>{
        return departments.category
      });

      this.videoCategory= Array.from(new Set(Vcategory));
      console.log( this.videoCategory);
    }
  );
  }

  //books category

  OnBookCategory():void{
    this.libraryService.bookCategory().subscribe(

      (response)=>{
        const Bcategory=response.map((departments)=>{
          return departments.category
        });

        this.bookCategory= Array.from(new Set(Bcategory));
        console.log( this.bookCategory);
      }
    );
    }


      ishidden= false;
  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);
}}
