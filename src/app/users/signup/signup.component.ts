import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private builder:FormBuilder,private toaster:ToastrService,private service:UserService,private router:Router){}


 registerationForm!: FormGroup;
 hide = true;


 departments=["Highschool","Software Engineering","Electrical Engineering","Chemical Engineering","Social Science","Computer Science","Natural Science","Healthy Science","Veterinary Science","Agriculture","Business and Economics","Art","Language","Law"]
 formDataValues=["photo","name","department","job","phone","password"]

 indexFormData=0
 onFormContinue(){


  this.indexFormData+=1

 }

 onBackForm(){
  if(this.indexFormData>=0){
    this.indexFormData-=1;
  }
 }




ngOnInit(): void {
    this.registerationForm=this.builder.group({
      // profileImage:this.builder.control('',Validators.required),
      FirstName:this.builder.control('',Validators.required),
      LastName:this.builder.control('',Validators.required),
      Job:this.builder.control('',Validators.required),
      department:this.builder.control('',Validators.required),
      PhoneNumber:this.builder.control('',Validators.required),
      Password:this.builder.control('',Validators.required),
      // role:this.builder.control('',Validators.required),

    });
}

profilePhoto:any;
onProfilePhotoSelect(event:any){
this.profilePhoto=event.target.files[0];
}

procedRegistration(){
  if(this.registerationForm.valid){

    const formData=new FormData();
    formData.append("FirstName",this.registerationForm.get('FirstName')?.value);
    formData.append("department",this.registerationForm.get('department')?.value);
    formData.append("PhoneNumber",this.registerationForm.get('PhoneNumber')?.value);
    formData.append("LastName",this.registerationForm.get('LastName')?.value);
    formData.append("Job",this.registerationForm.get('Job')?.value);
    formData.append("profileImage",this.profilePhoto)

    formData.append("Password",this.registerationForm.get('Password')?.value);
    this.service.procedRegister(formData).subscribe(
      (response: any)=>{
        this.toaster.success("Register successfully");
        this.router.navigate(['login'])
      }
    );
  }

  else{
    this.toaster.warning("please enter a valid")
  }

}
}
