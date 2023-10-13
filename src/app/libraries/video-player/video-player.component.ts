import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import { Video, VideoCategory } from '../video/video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
constructor(private activatedRoute:ActivatedRoute,private libraryService:LibraryService) {}
videoId:any;
video!:Video;
categoryId:any;
category!:VideoCategory;
ngOnInit(): void {
  this.categoryId=this.activatedRoute.snapshot.paramMap.get('categoryId')
  this.videoId = this.activatedRoute.snapshot.paramMap.get('videoId');
  this.onGetVideoById();

  this.onGetVideoCategoryById();

}

onGetVideoById():void{
this.libraryService.getVideoById(Number(this.videoId)).subscribe(
 (response)=>{
  this.video=response;
  console.log(response);
 },
 (error)=>console.log(error)
);
}


// get video category by id

onGetVideoCategoryById():void{
  this.libraryService.getVideoCategoryById(Number(this.categoryId)).subscribe(
    (response)=>{
     this.category=response;
     console.log(response);
    },
    (error)=>console.log(error)
   );
   }


}

