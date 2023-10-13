import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LibraryService } from 'src/app/libraries/library.service';
import { Video } from 'src/app/libraries/video/video';
import { Saving } from 'src/app/saving/saving';
import { SavingAccountService } from 'src/app/saving/saving-account.service';

@Component({
  selector: 'app-video-payment',
  templateUrl: './video-payment.component.html',
  styleUrls: ['./video-payment.component.css']
})
export class VideoPaymentComponent {

constructor(private libraryService:LibraryService,private activateRoute:ActivatedRoute, private formService:FormBuilder,private router:Router,private toaster:ToastrService,private savingService:SavingAccountService){}
subjectId:any;
videoOnPayment!:Video;
isBought!:boolean;
userId=Number(sessionStorage.getItem('user'));
paymentGroup!:FormGroup;
mySavingAccount!:Saving;
message!:string;
errorMessage!:string;

ngOnInit(): void {
  this.paymentGroup=this.formService.group({})
    this.subjectId=this.activateRoute.snapshot.paramMap.get('id');
    this.getVideoById();
    this.onVideoPayment();
}



getVideoById(){
  return this.libraryService.getVideoById(this.subjectId).subscribe(
    (response)=>{

      this.videoOnPayment=response;

      this.isBought=response.buyers.some((user)=>user.userId==this.userId)
      console.log(response);},
      (error)=>console.log(error),
      ()=>console.log("You get exams succesfully")


  );
}


onVideoPayment():void{

  this.savingService.mySavingAccount().subscribe(
    (response) =>{
      this.mySavingAccount = response
      console.log("deribshime",this.mySavingAccount.balance)
    },
    (err) =>{console.log(err)},

  );


  this.libraryService.onVideoPayment(this.videoOnPayment.id).subscribe(

    (response)=>{

      if(this.mySavingAccount==null||this.mySavingAccount.balance==null){
        this.message="noAccount"
      }
      else{

        if(this.mySavingAccount.balance>=this.videoOnPayment.price && !this.isBought){
          this.message="success"
          this.toaster.success(`you Succesfully bought the ${this.videoOnPayment.title} video`,'Thank you!');
          this.router.navigate(['/video/player',this.videoOnPayment.categoryId,this.videoOnPayment.id])
        }



      }
      console.log("my message",this.message)
      console.log(this.isBought )

    },
    (error)=>{
      this.message = 'error';
     this.errorMessage=error.error.message;
    }



  );
}



}
