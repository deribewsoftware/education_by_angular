import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder:FormBuilder,private toaster:ToastrService,private service:UserService,private router:Router){}


  registerationForm=this.builder.group({
   // profileImage:this.builder.control('',Validators.required),

   PhoneNumber:this.builder.control('',Validators.required),
   Password:this.builder.control('',Validators.required),
   // role:this.builder.control('',Validators.required),

 });

 department=localStorage.getItem('department');
 procedRegistration(){
   if(this.registerationForm.valid){
     this.service.login(this.registerationForm.value).subscribe(
       (response: any)=>{
         this.toaster.success("Register successfully");
         this.router.navigate([`course/list/refresh`])
         localStorage.setItem('at',response.access_token);
         localStorage.setItem('rt',response.refresh_token);
         console.log(response.access_token);
       },



     );

   }

   else{
     this.toaster.warning("please enter a valid")
   }

 }
}
