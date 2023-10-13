import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { Course } from '../../course';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-chapter',
  templateUrl: './create-chapter.component.html',
  styleUrls: ['./create-chapter.component.css']
})
export class CreateChapterComponent implements OnInit{
  constructor
  (private courseService:CourseService,
    private activeRoute:ActivatedRoute,
    private formBuider:FormBuilder,
    private toastr:ToastrService,
    private router:Router
    ){}
course!:Course
courseId!:any;
chapterForm!:FormGroup;



ngOnInit(): void {
  this.chapterForm=this.formBuider.group({
    title: ['',Validators.required],
    chapter: ['',Validators.required],
  })
  this.courseId=this.activeRoute.snapshot.paramMap.get("courseId");
  this.onGetCourse();
  this.onCreateChapter();
}
  onGetCourse():void{
    this.courseService.getCourse(Number(this.courseId)).subscribe(
      (response)=>{
        this.course=response;

        console.log(response);

      },

      (error)=>{}
    );
  }

  //create Chapter

  onCreateChapter():void{
    if(this.chapterForm.valid){
      const chapterData=this.chapterForm.value;

    this.courseService.createChapter(this.courseId,chapterData).subscribe(
      (response)=>{
        this.toastr.success("Chapters successfully registered");
        this.router.navigate(['/chapterslist',this.courseId])
        console.log(response);

      },
      (error)=>{
        console.log(error);
        this.router.navigate(['/error'])
        this.toastr.error("chapter creation failed")
      }
      );}
  }

}
