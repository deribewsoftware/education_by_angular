import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Chapter } from '../chapter';
import { CourseService } from '../../course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../course';

@Component({
  selector: 'app-chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.css'],



})
export class ChaptersListComponent implements OnInit {
  constructor(private courseService:CourseService,private activeRouter:ActivatedRoute){}


  chapters!:Chapter[];
  courseId:any;
course!:Course;
  expandedId!:any;


  onexpanded(chapterId:any=null){
    this.expandedId = chapterId;
  }

  ngOnInit(): void {
 this.courseId=this.activeRouter.snapshot.paramMap.get("courseId");
    this.onGetChapterList();
    this.ongetCourse();

  }

  ongetCourse(){
    this.courseService.getCourse(Number(this.courseId)).subscribe(
      (response) => {
        this.course=response;
      },
      (error) => {
        console.log(error)
      });

  }

onGetChapterList(): void {
  this.courseService.getAllChapters().subscribe(
    (response)=>{
      this.chapters = response.filter((chapter)=>chapter.courseId==this.courseId);
      console.log(this.chapters);
    },
    (error)=>{console.log(error)}
  );
}
}
