import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from '../lesson';
import { Course } from '../../course';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit,AfterViewInit {
  constructor(private lessonService:CourseService,private routerActive:ActivatedRoute,private courseService:CourseService,private router:Router,private elementRef:ElementRef){}
 lessonId:any;
 chapterId:any;
 lesson!:Lesson;
 course!:Course;
 courseId:any;
 isBought:any;



 userId=Number(sessionStorage.getItem('user'));
 isActive=false;

 ngAfterViewInit(): void {
  const chapterClass=this.elementRef.nativeElement.querySelector('.chapter');
  this.isActive=chapterClass && chapterClass.classList.contains('active');


 }
  ngOnInit(): void {
    this.courseId=this.routerActive.snapshot.paramMap.get('courseId');
    this.lessonId=this.routerActive.snapshot.paramMap.get('lessonId');
    this.chapterId=this.routerActive.snapshot.paramMap.get('chapterid');
    this.ongetlesson();
    this.onGetCourse()

  }
//get cpurses
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



//get lessons
  ongetlesson():void{
    console.log(this.lessonId);
this.lessonService.getlesson(Number(this.lessonId)).subscribe(
  (response)=>{this.lesson = response
  console.log(response)},
  (error)=>console.error(error),
  ()=>console.log("lesson is fetched successfully")
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
