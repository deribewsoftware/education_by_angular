import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExamService } from 'src/app/exams/exam.service';
import { SavingAccountService } from 'src/app/saving/saving-account.service';

@Component({
  selector: 'app-exams-card',
  templateUrl: './exams-card.component.html',
  styleUrls: ['./exams-card.component.css']
})
export class ExamsCardComponent implements OnInit {
  constructor(private service:ExamService,private  formBuilder: FormBuilder,private toaster:ToastrService,private savingService:SavingAccountService){}
  @Input() subject!: string;
  @Input() subjectId!: number;
  @Input() logo!: string;
  @Input() year!: any;
  @Input() routeDirection!: string;
  @Input() routeDirectionId!: any;
  @Input() routerIdTwo:any;
  @Input() views!: any;
  @Input() likes!: any;
  @Input() price: any;
  @Input() shouldRotate:boolean=true;
  @Input() isBought!: boolean;

  paymentForm!:FormGroup;
  balance!: any;
  showalertData!:string;
  onShowAlert(data:any){
    this.showalertData=data;

  }


 ngOnInit(): void {
  this.paymentForm = this.formBuilder.group({
    // Define form controls here
  });

 }



 //saving account
 onMyAccount(): void {
  this.savingService.mySavingAccount().subscribe(
    (response) =>{
      this.balance = response.balance;
      console.log(this.balance);
    },
    (err) =>{console.log(err)},
    () =>{console.log('my balance is fetched successfully')}
  );
}

  onSubmit() {

if(this.paymentForm.valid){
    this.service.onBuyExam(this.subjectId)
      .subscribe(
        response => {
          if(this.balance>=this.price){
          console.log('Response:', response);
          // Handle success here
          console.log(this.balance);

          this.toaster.success(`Thank you  are buyed  ${this.subject} successfully`)
          }
          else{
            this.toaster.warning(`Sorry Your Account Have not enough balance to buy this exam Please recharge your account!`)

          }

        },
        error => {
          console.error('Error:', error);
          this.toaster.warning(`your are already  bought  ${this.subject} exam`);
          // Handle error here
        },
        () => console.log('buyed successfully')
      );
  }

  else{
    this.toaster.error("you have no account")

  }}



  //modals
  Paymentshowmodal(data:any) {
    const modalOverlay=document.getElementById("paymentmodal-overlay")
    const modal=document.getElementById("paymentmodal")
    const modalContent=document.getElementById("paymentmodal-content")
    if(modalOverlay!=null && this.subjectId==data){
      modalOverlay.style.display='block';}
if(modalContent!=null){
  modalContent.style.display='block';
}

if(modal!=null){
  modal.style.display='block';
}


}

closemodal(){
  const modalOverlay=document.getElementById("paymentmodal-overlay")
  const modal=document.getElementById("paymentmodal")
  const modalContent=document.getElementById("paymentmodal-content")
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
