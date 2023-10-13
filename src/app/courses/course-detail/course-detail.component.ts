import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor( private routerActive:ActivatedRoute,private courseService:CourseService,private router:Router){}
  courseId!:any;
  course!:Course;

  isBought!:boolean;
  chapterId!:any;
  userId=Number(sessionStorage.getItem('user'))



  ngOnInit(): void {
     this.courseId = this.routerActive.snapshot.paramMap.get('id');
     this.onGetCourse();
  }

  onGetCourse():void{
    this.courseService.getCourse(Number(this.courseId)).subscribe(
      (response)=>{
        this.course = response;
        const buyers=response;
        this.isBought=buyers.buyers.some((buyer)=>buyer.userId==this.userId);
        console.log(this.isBought);
        console.log(response);
        console.log(this.userId)

      },
      (error:any)=>console.log(error),
      ()=>console.log("Course  is done")

      );
    }


    //expanded chapter

    onexpandedChapter(chapterId:any,isbought:boolean){
      if(isbought){
        this.chapterId = chapterId;
      }
      else{
 this.router.navigate(['/payment/course/',this.courseId]);
      }


    }

  ishidden= false;
  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);
  }
}
