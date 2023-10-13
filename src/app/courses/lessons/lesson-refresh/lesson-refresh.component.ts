import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lesson-refresh',
  templateUrl: './lesson-refresh.component.html',
  styleUrls: ['./lesson-refresh.component.css']
})
export class LessonRefreshComponent implements OnInit {
  constructor(private activeRoute:ActivatedRoute,private router:Router){}
  lessonId:any;
  courseId:any;
  chapterId:any
  ngOnInit(): void {
    this.courseId = this.activeRoute.snapshot.paramMap.get('courseId');
    this.chapterId = this.activeRoute.snapshot.paramMap.get('chapterId');
    this.lessonId = this.activeRoute.snapshot.paramMap.get('lessonId');
    this.router.navigate(['/course/chapter',this.courseId,this.chapterId, this.lessonId]);

  }

}
