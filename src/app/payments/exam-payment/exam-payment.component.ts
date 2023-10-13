import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamsCategory } from 'src/app/exams/exam';

import { ExamService } from 'src/app/exams/exam.service';


@Component({
  selector: 'app-exam-payment',
  templateUrl: './exam-payment.component.html',
  styleUrls: ['./exam-payment.component.css']
})
export class ExamPaymentComponent implements OnInit {
constructor(private examService:ExamService,private activateRoute:ActivatedRoute, private formService:FormBuilder,private router:Router,private toaster:ToastrService){}
subjectId:any;
examOnPayment!:ExamsCategory;
isBought!:boolean;
userId=Number(sessionStorage.getItem('user'));
paymentGroup!:FormGroup;

ngOnInit(): void {
  this.paymentGroup=this.formService.group({})
    this.subjectId=this.activateRoute.snapshot.paramMap.get('id');
    this.onGetExamById();
    this.onPayExams();
}



onGetExamById(){
  return this.examService.getExamById(this.subjectId).subscribe(
    (response)=>{

      this.examOnPayment=response;

      this.isBought=response.buyers.some((user)=>user.userId==this.userId)
      console.log(response);},
      (error)=>console.log(error),
      ()=>console.log("You get exams succesfully")


  );
}



onPayExams():void{
  this.examService.onBuyExam(this.examOnPayment.id).subscribe(
    (response)=>{
      this.toaster.success(`Thank you!!`,`you are successfully bought ${this.examOnPayment.subject} Exam`);
      this.router.navigate(['/exams',this.examOnPayment.examType,this.examOnPayment.subject])
      console.log(response);

    },
    (error)=>{
      console.log(error);

      if(this.isBought){
        this.router.navigate(['/exams',this.examOnPayment.examType,this.examOnPayment.subject]);
        this.toaster.warning(`you are already  bought ${this.examOnPayment.subject} Exam`);

      }
      else{

        this.toaster.warning(`you haven't enough balance to buy this  ${this.examOnPayment.subject} Exam`,`Please check your Saving Account`,);
      }

    },
    ()=>console.log('buyed exams successfully')

  );
}
}
