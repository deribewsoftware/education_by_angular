import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/courses/course.service';
import { Content } from '../content';
import { ToastrService } from 'ngx-toastr';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.css'],
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
export class ContentEditComponent implements OnInit {
  constructor(private courseService:CourseService,private activeRoute:ActivatedRoute,private formBuilder:FormBuilder,private toastr:ToastrService,private router:Router){}

  ContentEditForm!:FormGroup;
  content_photo:any;
  contentId:any;
  lessonId:any;
  content!:Content;
  photoChange:any=null;
  isLoading:boolean=false;

  //on Change Content

  subTitleChange:any;
  contentChange:any;
  link_urlChange:any;
  remarkChange:any;
  onPhotoChange:any;
  chipsStore:any[]=[];



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


//loading
  onLoading(){
    this.isLoading=true;
  }









  ngOnInit(): void {

    this.contentId=this.activeRoute.snapshot.paramMap.get('contentId');
    this.lessonId=this.activeRoute.snapshot.paramMap.get('lessonId');

    this.ContentEditForm=this.formBuilder.group({

      sub_title:[''],


        content:[''],


        remark:[''],


        link_url:['']




    });
    this.ongetContent();
    this.  ongetContentSetValue();

    // Populate initial values




  }

// show SubTitle

showSubTitle(){
this.subTitleChange='subtitle'
}

// show content

showContent(){
  this.contentChange='subtitle'
  }


  // show remark

showRemark(){
  this.remarkChange='subtitle'
  }

  // show link
  // show SubTitle

showLinkUrl(){
  this.link_urlChange='subtitle'
  }

  //on photo change
  showPhotoChange(){
    this.onPhotoChange='uploadPhoto'
  }



  //get content by id
  ongetContentSetValue():void{
    this.courseService.getContentById(Number(this.contentId)).subscribe(
      (response)=>{

        this.content=response;
        console.log(this.content);

        this.ContentEditForm.setValue({
          sub_title: this.content.sub_title|| '',
          content: this.content.content || '',
          remark: this.content.remark || '',
          link_url: this.content.link_url || ''
        });








      },
      (error)=>{

        console.log(error)
      }
    );
  }



  //get content by id
  ongetContent():void{
    this.courseService.getContentById(Number(this.contentId)).subscribe(
      (response)=>{



        this.chipsStore.push(response.content?'content':'');
        this.chipsStore.push(response.sub_title?'title':'');
        this.chipsStore.push(response.remark?'remark':'');
        this.chipsStore.push(response.link_url?'url':'');
        this.chipsStore.push(response.photo!='undefined'?'photo':'undefined');




      },
      (error)=>{

        console.log(error)
      }
    );
  }






  // photo selected
  onSelectedContentPhoto(event:any){
    this.content_photo = event.target.files[0];
    const reader=new FileReader();





    reader.onload=()=>{
      this.photoChange=reader.result as string;
    }
    reader.readAsDataURL(this.content_photo);
    console.log(this.content_photo)
  }


  // Edit content form
  onEditContent(): void {
    const formdata=new FormData();
    formdata.append('sub_title', this.ContentEditForm.get('sub_title')?.value)
    formdata.append('content', this.ContentEditForm.get('content')?.value)
    formdata.append('remark', this.ContentEditForm.get('remark')?.value)
    formdata.append('link_url', this.ContentEditForm.get('link_url')?.value)
    formdata.append('photo', this.content_photo)


    console.log(this.ContentEditForm.get('link_url')?.value)
    this.courseService.updateContent(Number(this.contentId),formdata).subscribe(
      (response)=>{
        this.isLoading=false;
        this.router.navigate(['/course/chapter/lesson',this.lessonId])
        this.toastr.success("Content updated successfully")
      },
      (error)=>{
        console.log(error);
        this.isLoading=false;
        this.toastr.error("Error updating content")
      }
    )

  }
}
