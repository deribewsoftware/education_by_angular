import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../courses/course.service';
import { Course } from '../courses/course';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatAccordion } from '@angular/material/expansion';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-learners',
  templateUrl: './learners.component.html',
  styleUrls: ['./learners.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],


})
export class LearnersComponent implements OnInit {
  constructor(private courseService:CourseService,private activeRoute:ActivatedRoute){}


  displayedColumns: string[] = ['id', 'photo','fullName','department','phone_no','mark','status','certify','notify'];
dataSource!: MatTableDataSource<User>;
users!:User[]

  course!:Course
  courseId:any;



@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
@ViewChild(MatAccordion) accordion!: MatAccordion;
  ngOnInit(): void {
    this.courseId=this.activeRoute.snapshot.paramMap.get('courseId');
this.onGetCourse();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

  }


  //filter learners

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  onGetCourse():void{
    this.courseService.getCourse(Number(this.courseId)).subscribe(
      (response)=>{
        this.course=response;
        this.dataSource=new MatTableDataSource(response.buyers);
        this.users=response.buyers;
        console.log(response);
        console.log('deri',this.users)
      },

      (error)=>{}
    );
  }

//get all courses by Id
}
