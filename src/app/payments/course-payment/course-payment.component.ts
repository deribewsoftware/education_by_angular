import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course} from 'src/app/courses/course';
import { CourseService } from 'src/app/courses/course.service';
import { Saving } from 'src/app/saving/saving';
import { SavingAccountService } from 'src/app/saving/saving-account.service';


@Component({
  selector: 'app-course-payment',
  templateUrl: './course-payment.component.html',
  styleUrls: ['./course-payment.component.css']
})
export class CoursePaymentComponent {

  constructor(private courseService:CourseService,private activateRoute:ActivatedRoute, private formService:FormBuilder,private router:Router,private toaster:ToastrService,private savingService:SavingAccountService){}
subjectId:any;
course!:Course;
isBought!:boolean;
userId=Number(sessionStorage.getItem('user'));
paymentGroup!:FormGroup;
message!:string;
mySavingAccount!:Saving;

ngOnInit(): void {
  this.paymentGroup=this.formService.group({})
    this.subjectId=this.activateRoute.snapshot.paramMap.get('id');
   this.onGetCourse();
    this.onPayCourse();

}


onGetCourse():void{
  this.courseService.getCourse(Number(this.subjectId)).subscribe(
    (response)=>{
      this.course = response;
      this.isBought=response.buyers.some((user)=>user.userId==this.userId)
      console.log(response);

    },
    (error:any)=>console.log(error),
    ()=>console.log("Course  is done")

    );
  }



  onPayCourse():void{

    this.savingService.mySavingAccount().subscribe(
      (response) =>{
        this.mySavingAccount = response
        console.log(this.mySavingAccount)
      },
      (err) =>{console.log(err)},

    );
    this.courseService.onBuyCourse(this.course.id).subscribe(

      (response)=>{

        if(this.mySavingAccount==null||this.mySavingAccount.balance==null){
          this.message="noAccount"
        }
        else{

          if(this.mySavingAccount.balance>=this.course.price && !this.isBought){
            this.message="success"
            this.toaster.success('you bought the Course successfully','Thank you!')
            this.router.navigate(['/course',this.course.id])
          }

          if(this.mySavingAccount.balance<this.course.price && !this.isBought){
            this.message="insufficient"
          }

        }

      },
      (error)=>{
    this.message="error"
    console.log(error)
      }


    );
  }

}
