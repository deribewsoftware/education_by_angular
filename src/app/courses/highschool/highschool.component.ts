import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-highschool',
  templateUrl: './highschool.component.html',
  styleUrls: ['./highschool.component.css']
})
export class HighschoolComponent implements OnInit {
  constructor(private courseService:CourseService){}

  allSubject:any[]=[
    "all",
    "English",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Chemistry",
    "Geography",
    "History",
    "Civic"
  ];


 subject:any;
 grade=9
  subject9='all';
  subject10='all';
  subject11='all';
  subject12='all';

  //grade 9 susbjects
  all9!:Course[]
  Biology9!:Course[]
  English9!:Course[]
  Maths9!:Course[]
  Physics9!:Course[]
  Chemistry9!:Course[]
  Civic9!:Course[]
  Geography9!:Course[]
  History9!:Course[]

   //grade 10 susbjects
   all10!:Course[]
   Biology10!:Course[]
   English10!:Course[]
   Maths10!:Course[]
   Physics10!:Course[]
   Chemistry10!:Course[]
   Civic10!:Course[]
   Geography10!:Course[]
   History10!:Course[]

   //grade 11 susbjects
   all11!:Course[]
   Biology11!:Course[]
   English11!:Course[]
   Maths11!:Course[]
   Physics11!:Course[]
   Chemistry11!:Course[]
   Civic11!:Course[]
   Geography11!:Course[]
   History11!:Course[]


   //grade 12 susbjects
   all12!:Course[]
   Biology12!:Course[]
   English12!:Course[]
   Maths12!:Course[]
   Physics12!:Course[]
   Chemistry12!:Course[]
   Civic12!:Course[]
   Geography12!:Course[]
   History12!:Course[]


  onSubjectSubject9(subject:any){
   this.subject9=subject;
   this.subject=subject;
  }

  onSubjectSubject10(subject:any){
    this.subject10=subject;
    this.subject=subject;
   }

   onSubjectSubject11(subject:any){
    this.subject11=subject;
    this.subject=subject;
   }

   onSubjectSubject12(subject:any){
    this.subject12=subject;
    this.subject=subject;
   }

   onGradeSelect(grade:any){
 this.grade=grade;
   }

   ngOnInit(): void {
    this.onGetHighSchoolCourses();

   }




   onGetHighSchoolCourses():void{
    this.courseService.onGetHighSchoolCourses().subscribe(
      (response)=>{
 //Grade 9
//  this.all9=response.filter((course)=>course.grade==9);
//  this.Biology9=response.filter((course)=>course.grade==9&&course.subject=='Biology');
//  this.English9=response.filter((course)=>course.grade==9&&course.subject=='English');
//  this.Maths9=response.filter((course)=>course.grade==9&&course.subject=='Mathematics');
//  this.Chemistry9=response.filter((course)=>course.grade==9&&course.subject=='Physics');
//  this.Geography9=response.filter((course)=>course.grade==9&&course.subject=='Geography');
//  this.History9=response.filter((course)=>course.grade==9&&course.subject=='Chemistry');
//  this.Civic9=response.filter((course)=>course.grade==9&&course.subject=='Civic');

 //Grade 10
//  this.all10=response.filter((course)=>course.grade==10);
//  this.Biology10=response.filter((course)=>course.grade==10&&course.subject=='Biology');
//  this.English10=response.filter((course)=>course.grade==10&&course.subject=='English');
//  this.Maths10=response.filter((course)=>course.grade==10&&course.subject=='Mathematics');
//  this.Physics10=response.filter((course)=>course.grade==10&&course.subject=='Physics');
//  this.Chemistry10=response.filter((course)=>course.grade==10&&course.subject=='Chemistry');
//  this.Geography10=response.filter((course)=>course.grade==10&&course.subject=='Geography');
//  this.History10=response.filter((course)=>course.grade==10&&course.subject=='Chemistry');
//  this.Civic10=response.filter((course)=>course.grade==10&&course.subject=='Civic');

 //Grade 11
//  this.all11=response.filter((course)=>course.grade==11);
//  this.Biology11=response.filter((course)=>course.grade==11&&course.subject=='Biology');
//  this.English11=response.filter((course)=>course.grade==11&&course.subject=='English');
//  this.Maths11=response.filter((course)=>course.grade==11&&course.subject=='Mathematics');
//  this.Physics11=response.filter((course)=>course.grade==11&&course.subject=='Physics');
//  this.Chemistry11=response.filter((course)=>course.grade==11&&course.subject=='Chemistry');
//  this.Geography11=response.filter((course)=>course.grade==11&&course.subject=='Geography');
//  this.History11=response.filter((course)=>course.grade==11&&course.subject=='Chemistry');
//  this.Civic11=response.filter((course)=>course.grade==11&&course.subject=='Civic');

 //Grade 12
//  this.all12=response.filter((course)=>course.grade==12);
//  this.Biology12=response.filter((course)=>course.grade==12&&course.subject=='Biology');
//  this.English12=response.filter((course)=>course.grade==12&&course.subject=='English');
//  this.Maths12=response.filter((course)=>course.grade==12&&course.subject=='Mathematics');
//  this.Physics12=response.filter((course)=>course.grade==12&&course.subject=='Physics');
//  this.Chemistry12=response.filter((course)=>course.grade==12&&course.subject=='Chemistry');
//  this.Geography12=response.filter((course)=>course.grade==12&&course.subject=='Geography');
//  this.History12=response.filter((course)=>course.grade==12&&course.subject=='Chemistry');
//  this.Civic12=response.filter((course)=>course.grade==12&&course.subject=='Civic');


        console.log(this.Maths11);
      },
      (error)=>console.log(error),
      ()=>console.log('High School Course fetched successfully')
    );

   }
}
