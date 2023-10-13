import { Component, Input } from '@angular/core';
import { CourseCategory } from '../course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent {
  constructor(private router:Router){}
@Input() CourseList!:CourseCategory[];

@Input() isBought!:any[];

// @Input() Department!:string;
// @Input() CategoryChange="Engineering";
// @Input() DepartmentChange="Software Engineering";

courseIndex=5
onCourseIndex(data:any){
  this.courseIndex=data;
}


courseNavigation(categoryId:number, courseId:number){
  if(this.isBought[categoryId][courseId]){
    this.router.navigate(['/course',this.CourseList[categoryId].course[courseId].id]);
  }
  else{
    this.router.navigate(['payment/course',this.CourseList[categoryId].course[courseId].id]);
  }
 }
}
