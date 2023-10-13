import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video, VideoCategory } from './video/video';
import { Book, BookCategory } from './book/book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http:HttpClient) { }

  private video_url = 'http://localhost:3000/Video';
  private book_url = 'http://localhost:3000/Book';

  private token=sessionStorage.getItem('token');


  videoCategory():Observable<VideoCategory[]>{
 return this.http.get<VideoCategory[]>(this.video_url+'/category/alist')
  }




  bookCategory():Observable<BookCategory[]>{
    return this.http.get<BookCategory[]>(this.book_url+'/category/alist' );
     }

     getVideoById(videoId:number):Observable<Video>{

      return this.http.get<Video>(this.video_url+`/play/${videoId}`);
     }

//get video lists
getVideoList():Observable<Video[]>{
  const headers=new HttpHeaders ({
    Authorization: 'Bearer ' +this.token
  });
  return this.http.get<Video[]>(this.video_url,{headers});
}


     getVideoCategoryById(videoId:number):Observable<VideoCategory>{
      return this.http.get<VideoCategory>(this.video_url+`/category/${videoId}`);
     }



     //get book by id
    getBookById(bookId:number):Observable<Book>{

      return this.http.get<Book>(this.book_url+`/reader/${bookId}`);
    }




    //video Payment
    onVideoPayment(videoId:number){
      const headers=new HttpHeaders ({
        Authorization: 'Bearer ' +this.token
      });
      return this.http.post(this.video_url+`/payment/buy/${videoId}`,{},{headers})

    }

    //create videos

    createVideo(categoryId:number,accountId:number,data:any):Observable<Video>{
      return this.http.post<Video>(this.video_url+`/${categoryId}/${accountId}`,data);
    }

     //create books

     createBook(categoryId:number,accountId:number,data:any):Observable<Book>{
      return this.http.post<Book>(this.book_url+`/${categoryId}/${accountId}`,data);
     }
}
