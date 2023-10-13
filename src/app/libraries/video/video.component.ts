import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { VideoCategory, Video } from './video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  constructor(private activeRoute:ActivatedRoute,private libraryService:LibraryService,private router:Router){}
  videosAlist!:VideoCategory[];
  department:any;
  userId=Number(sessionStorage.getItem('user'))
  isVideoBought!:any[];

  ngOnInit(): void {
    this.department=this.activeRoute.snapshot.paramMap.get('department');
    this.OnVideoCategory();

  }


  OnVideoCategory():void{
    this.libraryService.videoCategory().subscribe(

      (response)=>{
        this.videosAlist=response.filter((category)=>category.category==this.department);
        this.isVideoBought=this.videosAlist.map((category)=>category.videos.map((video)=>video.buyers.some((buyer)=>buyer.userId==this.userId)|| video.price==0));
        console.log(this.isVideoBought);


      }
    );
    }

    // video naviagtion
    onVideoNavigationEnd(categoryIndex:number,videoIndex:number){

      if(this.isVideoBought[categoryIndex][videoIndex]){
        return this.router.navigate(['/video/player', this.videosAlist[categoryIndex].id, this.videosAlist[categoryIndex].videos[videoIndex].id])
      }
      else{
        console.log(this.router.navigate(['/video/payment', this.videosAlist[categoryIndex].videos[videoIndex].id]))
        return this.router.navigate(['/video/payment', this.videosAlist[categoryIndex].videos[videoIndex].id])
      }
    }




    ishidden= false;
    onhidden($event:boolean){
      this.ishidden = $event;
      console.log(this.ishidden);
}}
