import { Component, OnInit } from '@angular/core';
import { Course, CourseCategory } from '../../course';
import { CourseService } from '../../course.service';
import { ActivatedRoute } from '@angular/router';
import  * as moment from 'moment'

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  constructor(private courseService:CourseService,private activeRoute:ActivatedRoute){}
  categoryId:any;
  subjectId:any;
  categorySelected='Courses'
  isShowtable=false;

  onShowTable(){
    if(this.isShowtable){
      this.isShowtable=false;}
      else{
        this.isShowtable=true;
      }}

      onTab(data:any){
        this.categorySelected=data;
      }

      onMoment(createdAt:any){
        return  moment(createdAt).fromNow();
      }
  ngOnInit(): void {
    this.categoryId = this.activeRoute.snapshot.paramMap.get('categoryId');
    this.subjectId=this.activeRoute.snapshot.paramMap.get('subjectId');
    this.getNewCourse();
    this.getPopularCourse();

    this.getCourse();


  }
  course!: CourseCategory;
  popularCourse!: Course[];
  mostRatedCourse!: Course[];
  newCourses!:Course[];

  ishidden= false;
  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);}


    getCourse(): void {
      this.courseService.getCourseCategoryById(Number(this.subjectId)).subscribe(
        (response) => {

          this.course = response;
console.log(response);

        },
        (error) => {

        }
      );
    }

    getPopularCourse():void {
      this.courseService.getCourseCategoryById(Number(this.subjectId)).subscribe(
        (response) => {
          this.popularCourse =response.course;
       this.popularCourse.sort((a:any,b:any)=>b.buyersCount-a.buyersCount)
console.log('popularCourse',this.popularCourse)
        },
        (error) => {
          console.log(error);
        }
      );
    }

    getNewCourse(): void {
      this.courseService.getCourseCategoryById(Number(this.subjectId)).subscribe(
        (response) => {
        this.newCourses =response.course;
        this.newCourses.forEach(course => {
          course.createdAt = new Date(course.createdAt);
        });

      this.newCourses.sort((a,b)=>b.createdAt.getTime()-a.createdAt.getTime())
          console.log("Time",response.createdAt)
          console.log("Course",this.newCourses)
        },
        (error) => {
          console.log(error);
        }
      );
    }



}
