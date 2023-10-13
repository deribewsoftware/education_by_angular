import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/courses/course.service';
import { Lesson } from '../../lesson';
import { ToastrService } from 'ngx-toastr';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-content-create',
  templateUrl: './content-create.component.html',
  styleUrls: ['./content-create.component.css'],
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
export class ContentCreateComponent implements OnInit {
  constructor(private formBuild:FormBuilder, private courseService:CourseService,private activeRoute:ActivatedRoute,private toastr:ToastrService){}

  ContentForm!:FormGroup;
  content_photo:any;
  lessonId:any;
  lesson!:Lesson;

  //lesson form
  LessonForm!:FormGroup;
  lesson_book:any;
  lesson_video:any;
  selectedLessonChips:any;
  LessonChipsStore:any[]=[];
  filePresent:any[]=[];


  //on selected change
  photoChange:any;
  subTitleChange:any;
  urlLinkChange:any;
  contentChange:any;
  remarkChange:any;


  chipsStore:any[]=[];
//chips of written styles




title!:string;
content!:string;
photo!:string;
remark!:string;
url!:string;


lessonChips=[
  'video',
  'book',
'title',
'indroduction',
'conclusion',
'questions'
];


chipsData=[
  'title',
  'content',
  'photo',
  'remark',
  'url'
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

// on lesson chip selected
onlessonchipsSelected(chips:any){
  this.selectedLessonChips=chips;

}


  ngOnInit(): void {
    this.lessonId = this.activeRoute.snapshot.paramMap.get('lessonId');
    this.ongetlesson();

    this.ContentForm=this.formBuild.group({

      sub_title:[''],


        content:['',Validators.required],


        remark:[''],


        link_url:['']




    });

    this.LessonForm=this.formBuild.group({

       title:[''], body:[''], summary:[''],questions:[''],
 });

}


  //select content photo
  onSelectedContentPhoto(event:any){
    this.content_photo=event.target.files[0]
    const reader=new FileReader();

    reader.onload=()=>{
      this.photoChange=reader.result as string;
    }
    reader.readAsDataURL(this.content_photo);
    console.log(this.content_photo)

  }


   //selected lesson book
   onLessonBookSelected(book:any){
    this.lesson_book=book.target.files[0]

  }

  //selected lesson video
  onLessonVideoSelected(video:any){
    this.lesson_video=video.target.files[0]

  }



  //get lessons
  ongetlesson():void{
    console.log(this.lessonId);
this.courseService.getlesson(Number(this.lessonId)).subscribe(
  (response)=>{this.lesson = response

    this.LessonChipsStore.push(this.lesson.title!=''?'title':'');
    this.LessonChipsStore.push(this.lesson.body!=''?'indroduction':'');
    this.LessonChipsStore.push(this.lesson.summary!=''?'conclusion':'');
    this.LessonChipsStore.push(this.lesson.questions!=''?'questions':'');
    this.filePresent.push(this.lesson.videos!='undefined'?'video':'');
    this.filePresent.push(this.lesson.images!='undefined'?'book':'');

    console.log(response);
    this.LessonForm=this.formBuild.group({

      title:response.title||'', body:response.body||'', summary:response.summary || '',questions:response.questions||'',
});},
  (error)=>console.error(error),
  ()=>console.log("lesson is fetched successfully")
);
  }

  //on updateLesson

  updateLesson():void {
    const formData=new FormData();
    formData.append('title', this.LessonForm.get('title')?.value);
    formData.append('body', this.LessonForm.get('body')?.value);
    formData.append('summary', this.LessonForm.get('summary')?.value);
    formData.append('questions', this.LessonForm.get('questions')?.value);
    formData.append('videos', this.lesson_video);
    formData.append('images', this.lesson_book);
    this.courseService.updateLesson(this.lessonId,formData).subscribe(
      (response)=>{

        this.toastr.success(`${response.title},${response.body},${response.questions},${response.summary},${response.videos}.${response.images} of lesson updated successfully`);
      },
      (error)=>{
        this.toastr.error('lesson not updated ')
        console.log(error);
      }
    );
  }


//create content form
  onCreateContent(): void {
    const formdata=new FormData();
    formdata.append('sub_title', this.ContentForm.get('sub_title')?.value)
    formdata.append('content', this.ContentForm.get('content')?.value)
    formdata.append('remark', this.ContentForm.get('remark')?.value)
    formdata.append('link_url', this.ContentForm.get('link_url')?.value)
    formdata.append('photo', this.content_photo)
    this.courseService.createContents(Number(this.lessonId),formdata).subscribe(
      (response)=>{
        console.log(response);
        this.toastr.success("successfully created content")
      },
      (error)=>{
        console.log(error);
        this.toastr.error("error creating content")
      }
    );
  }



}
