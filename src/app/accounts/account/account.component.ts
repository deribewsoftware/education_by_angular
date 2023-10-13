import { Component } from '@angular/core';
import { Course } from 'src/app/courses/course';
import { CourseService } from 'src/app/courses/course.service';
import { AccountService } from '../account-service.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/users/service/user.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  [x: string]: any;

  constructor(private accountService:AccountService,private router:ActivatedRoute, private  formBuilder: FormBuilder,private userService:UserService){}


accountId:any;
  subscriberForm!: FormGroup;
 account!: Account;
 account_name!:string;
ChannelLogo!:string;
userSub!:boolean;

user!:number;

ngOnInit(): void {
  this.subscriberForm = this.formBuilder.group({
    // Define form controls here
  });
  this.accountId=this.router.snapshot.paramMap.get('id');
    this.onGetAccount();
    this.onUser();


    // this.onCreateCourse();
}


//get user

onUser(): void {
  this.userService.myProfile().subscribe(
    response => {
      this.user = response.id;
      sessionStorage.setItem('userId', (response.id).toString());
      console.log('Response:', this.user);
      // Handle success here
    },
    error => {
      console.error('Error:', error);
      // Handle error here
    }
  )
}
onGetAccount():void{
  this.accountService.getAccountById(Number(this.accountId)).subscribe(
    (response)=>{
      this.account=response;
      console.log(response);
      const LogoName=this.account_name=response.accountName;
      const AccountLogo=LogoName.split(' ').map((name)=>name[0].toUpperCase());

      this.ChannelLogo=AccountLogo.join('');
      this.userSub=response.subscribers.some((user:any)=>user.userId===Number(sessionStorage.getItem('userId')));





    },
    (error:any)=>console.log(error),
    ()=>console.log("Account is done")

    );

}


// onSubscriber():void{
//   this.accountService.subscribeAccount(this.accountId).subscribe(
//     (response)=>{
//       console.log(response);
//     },
//     (error)=>console.log(error),
//     ()=>console.log("Account is done")
//   );
// }


hide = false;
showSuccess = false;







  showSuccessMessage(): void {
    this.showSuccess = true;
    setTimeout(() => {
      this.hide = true;
      this.showSuccess = false;
    }, 4000);
  }

onSubmit(): void {
  const subscriberData = this.accountId;

  this.accountService.subscribeAccount(subscriberData)
    .subscribe(
      response => {
        console.log('Response:', response);
        // Handle success here
        setTimeout(() => {
          this.hide = true;

        }, 4000);
      },
      error => {
        console.error('Error:', error);
        // Handle error here
      }
    );
}
// onCreateCourse(): void {
//   this.courseService.createCourse(this.course).subscribe(
//     (response:any)=>console.log(response),
//     (error:any)=>console.log(error),
//     ()=>console.log("Course  is done")

//   );
// }

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
}
