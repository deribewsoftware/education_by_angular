import { Component, OnInit } from '@angular/core';

import { Account } from '../account';
import { Observable } from 'rxjs';
import { AccountService } from '../account-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/courses/course.service';
import { CourseCategory } from 'src/app/courses/course';
import { LibraryService } from 'src/app/libraries/library.service';
import { VideoCategory } from 'src/app/libraries/video/video';
import { BookCategory } from 'src/app/libraries/book/book';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent  implements OnInit {
  constructor(private accountService:AccountService,private formBuilder: FormBuilder,private courseService:CourseService,private libraryService:LibraryService,private toastr:ToastrService ,private router:Router){}
  account!:Account;
  isAccountUpdatedLoaded=false;

  accountForm!: FormGroup;
  courseForm!: FormGroup;
  videoForm!: FormGroup;
  bookForm!: FormGroup;
  account_logo:any;
  courseCover:any;
  video:any;
  book:any;
  videoCover:any;
  bookCover:any;

  category!:CourseCategory[]
  categoryId!:number;
  videoCategories!:VideoCategory[];
  bookCategories!:BookCategory[];
  uploading=true;
  hiddeForm=false;
  imageUrl!:string;
  onSpinning(){
    this.hiddeForm=true;
  }

  ngOnInit(): void {
    this.videoCategory();
    this.getCourses();
      this.onMyAccount();
      this.bookCategory();

      this.accountForm = this.formBuilder.group({
        accountName: [''],
      });

      this.courseForm = this.formBuilder.group({
        courseTitle: [''],
        description: [''],
        price: [''],

      });

      this.bookForm = this.formBuilder.group({
        title: [''],
        description: [''],
        price: [''],

      });



      this.videoForm = this.formBuilder.group({
        title: [''],
        description: [''],
        price: [''],

      });



      // this.onUpdateAccount();
      this.createCourses();

  }



  onCategoryId(event:any): void {
    this. categoryId=Number(event.target.value);

  }

  onVideoSelect(data:any){
    this.video=data.target.files[0];
  }


  onVideoCoverSelect(data:any){
    this.videoCover=data.target.files[0];
  }


  onBookSelect(data:any){
    this.book=data.target.files[0];
  }


  onBookCoverSelect(data:any){
    this.bookCover=data.target.files[0];
  }


//get video category

videoCategory():void{
  this.libraryService.videoCategory().subscribe(
    (response)=>{
      this.videoCategories=response;


    },
    (error)=>console.log(error)
  );
}

//get bookcategory

bookCategory():void{
  this.libraryService.bookCategory().subscribe(
    (response)=>{
      this.bookCategories=response;

    },
    (error)=>console.log(error)
  );
}

 onMyAccount():void{
  this.accountService.myChannel().subscribe(
    (response:any)=>{
      this.account = response;


    console.log(response);},
    (error:any)=>console.log(error),
    ()=>console.log("acccount fetch success")

  );
 }




//create videos
onCreateVideo(){
  if(this.courseForm.valid){
    const formData = new FormData();
    formData.append('cover', this.videoCover);
    formData.append('video', this.video);
    formData.append('title', this.videoForm.get('title')?.value);
    formData.append('description', this.videoForm.get('description')?.value);
    formData.append('price', this.videoForm.get('price')?.value);
    console.log(formData);
   const categoryId=this. categoryId;
    console.log(categoryId);
  this.libraryService.createVideo(categoryId,this.account.id,formData).subscribe(
    (response)=>{
      this.toastr.success("You Created Videos successfully");
      console.log(response);
      this.hiddeForm=false;
    },
    (error)=>{console.log(error)
      this.hiddeForm=false;}
  );
}}

// create book
onCreateBook(){
  if(this.courseForm.valid){
    const formData = new FormData();
    formData.append('cover', this.bookCover);
    formData.append('book', this.book);
    formData.append('title', this.bookForm.get('title')?.value);
    formData.append('description', this.bookForm.get('description')?.value);
    formData.append('price', this.bookForm.get('price')?.value);
    console.log(formData);
   const categoryId=this. categoryId;
    console.log(categoryId);
  this.libraryService.createBook(categoryId,this.account.id,formData).subscribe(
    (response)=>{
      this.toastr.success("You Create Book successfully");
      console.log(response);
      this.hiddeForm=false;
    },
    (error)=>{console.log(error)
      this.hiddeForm=false;;}
  );
}
}



onFileSelected(event: any): void {
   this.account_logo = event.target.files[0];


   const reader = new FileReader();

    reader.onload = () => {
      this.imageUrl = reader.result as string;
    }

    reader.readAsDataURL(this.account_logo);
  console.log( this.account_logo);

}

onCourseCoverSelected(event: any): void {
  this.courseCover = event.target.files[0];

 console.log( this.courseCover);

}



onUpdateAccount():void{

  this.isAccountUpdatedLoaded=true;
  if(this.accountForm.valid){
  let formData = new FormData();

  formData.append('logo', this.account_logo);
  formData.append('accountName', this.accountForm.get('accountName')?.value);
  console.log('accountName');
  console.log(this.accountForm.get('accountName')?.value);

  this.accountService.updateAccount(this.account.id,formData).subscribe(

    (response)=>{
      this.isAccountUpdatedLoaded=false;

      this.router.navigate(['/myaccount']);
      console.log(response);
      this.toastr.success("Account updated successfully")
    },
    (error:any)=>{console.log(error)
      this.isAccountUpdatedLoaded=false;

      this.router.navigate(['/error']);
      this.toastr.error("Account cannot be updated")
    },
    ()=>console.log("update success")
  );
  }

}






getCourses():void{
  this.courseService.allCourssCategory().subscribe(
    (response)=>{
      console.log(response);
      this.category=response
    },
    (error)=>console.log(error)
  );

}

//create courses

createCourses():void{

  if(this.courseForm.valid){
    const formData = new FormData();
    formData.append('cover', this.courseCover);
    formData.append('subject', this.courseForm.get('courseTitle')?.value);
    formData.append('descrption', this.courseForm.get('description')?.value);
    formData.append('price', this.courseForm.get('price')?.value);
    console.log(formData);
   const categoryId=this. categoryId;
    console.log(categoryId);
  this.courseService.createCourses(this.account.id,categoryId,formData).subscribe(
    (response)=>{
      this.toastr.success("You Create Course successfully");
      console.log(response);
      this.hiddeForm=false;
    },
    (error)=>{console.log(error);
      this.hiddeForm=false;}
  );

}}













  ishidden= false;
  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);
  }

  //tab bar button click
toolbar='courses';
  onTap(bar:any){
    this.toolbar = bar;

  }

  //modals
  showmodal() {
    const modalOverlay=document.getElementById("accountModal-overlay")
    const modal=document.getElementById("accountModal")
    const modalContent=document.getElementById("accountModal-content")
    if(modalOverlay!=null){
      modalOverlay.style.display='block';}
if(modalContent!=null){
  modalContent.style.display='block';
}

if(modal!=null){
  modal.style.display='block';
}


}

closemodal(){
  const modalOverlay=document.getElementById("accountModal-overlay")
  const modal=document.getElementById("accountModal")
  const modalContent=document.getElementById("accountModal-content")
  if(modalOverlay!=null){
    modalOverlay.style.display='none';}
if(modalContent!=null){
modalContent.style.display='none';
}

if(modal!=null){
modal.style.display='none';
}


}




}
