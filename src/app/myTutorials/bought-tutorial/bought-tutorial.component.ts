import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/courses/course';
import { CourseService } from 'src/app/courses/course.service';
import { ExamsCategory } from 'src/app/exams/exam';
import { ExamService } from 'src/app/exams/exam.service';
import { LibraryService } from 'src/app/libraries/library.service';
import { Video } from 'src/app/libraries/video/video';

@Component({
  selector: 'app-bought-tutorial',
  templateUrl: './bought-tutorial.component.html',
  styleUrls: ['./bought-tutorial.component.css']
})
export class BoughtTutorialComponent  implements OnInit {
  constructor(private courseService:CourseService,private examService:ExamService,private libraryService:LibraryService){}

  boughtCourses!:Course[]
  boughtExams!:ExamsCategory[]
  boughtVideos!:Video[]
//user
userId=Number(sessionStorage.getItem('user'))
  ngOnInit(): void {
    this.  AllCourses();
    this.getAllExam();
    this. getVideoList();

  }




  // .map((course) =>course.buyers.some((user) => user.userId === this.userId));

  AllCourses():void{
    this.courseService.AllCourses().subscribe(
      (response)=>{
        this.boughtCourses=response.filter((course)=>course.buyers.some((buyer)=>buyer.userId==this.userId));
console.log( this.boughtCourses)
      },
      (error)=>console.log(error)
    );
  }

  //get all Exams
  getAllExam():void{
  this.examService.getAllExam().subscribe(
    (response)=>{
      this.boughtExams=response.filter((course)=>course.buyers.some((buyer)=>buyer.userId==this.userId));
      console.log(response);
    },
    (error)=>console.log(error)
  );
  }

  getVideoList():void{
    this.libraryService.getVideoList().subscribe(
      (response)=>{
       this. boughtVideos =response.filter((course)=>course.buyers.some((buyer)=>buyer.userId==this.userId));
       console.log(this.boughtVideos)
      },
      (error)=>console.log(error)
    );
  }
  ishidden= false;
  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);
  }
}
