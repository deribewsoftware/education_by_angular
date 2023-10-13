import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from '../lesson';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave',
        animate(300, style({ opacity: 0 })))
    ])
  ]
})
export class LessonCreateComponent implements OnInit {

  constructor(private courseService:CourseService,private formBuilder:FormBuilder,private toaster:ToastrService,private activeroute:ActivatedRoute,private router:Router){}
chapterId:any;
courseId:any;
lesson!:Lesson;
LessonForm!:FormGroup;
image:any;
video:any;
isloading= false






 //on change attributes
 titleChange='Lesson Title';
 summaryChange='options of lessson summary';
 indroductionChange='Indroduction of Lesson';
 //chips Store
 chipsStore:any[]=['title','indroduction']





 chipsData=[
  'title',
  'indroduction',
  'book',
  'questions',
  'conclusion',
  'video'
]

onchipsSelected(data:any){
  const index = this.chipsStore.indexOf(data);

  if (index > -1) {
    this.chipsStore.splice(index, 1);
  }
  else{
    this.chipsStore.push(data);
  }

 console.log(this.chipsStore);
 console.log(data);
}

  ngOnInit(): void {
    this.chapterId=this.activeroute.snapshot.paramMap.get('chapterId');
    this.courseId=this.activeroute.snapshot.paramMap.get('courseId');
    this.LessonForm=this.formBuilder.group({
      title:[''],
      content: [''],
      summary: [''],
      questions: [''],


    });




  }



//create loading indicator
  onCreateLoading(){
    this.isloading=true;
   }
  onImageSeleced(event:any) {
    this.image=event.target.files[0 ]
  }

  onVideoSeleced(event:any) {
    this.video=event.target.files[0 ]
  }

  onCreateLesson(): void {
    const formData=new FormData()
    formData.append('title',this.LessonForm.get('title')?.value)
    formData.append('body',this.LessonForm.get('content')?.value)
    formData.append('summary',this.LessonForm.get('summary')?.value)
    formData.append('questions',this.LessonForm.get('questions')?.value)
    formData.append('videos',this.image)
    formData.append('images',this.video)
    this.courseService.createlesson(this.chapterId,formData).subscribe(
      (response)=>{
        this.isloading=false;
        this.lesson=response;
        this.toaster.show("lesson created successfully")
        this.router.navigate(['/course/chapter/lesson',this.lesson.id])

        console.log(response)
      },
      (error)=>{
        this.isloading=false;
        console.log(error);
        this.toaster.error('Lesson is not submitted')
      }
    );
  }

}
