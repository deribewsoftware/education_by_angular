import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  constructor(private accountService:AccountService,private accountForm:FormBuilder){}

createAccountForm!:FormGroup;
account_logo:any;

  ngOnInit(): void {

    this.createAccountForm=this.accountForm.group({
      accountName:['',Validators.required]
    })
  }


  // file selected
  onFileSelected(event:any):void{
    this.account_logo=event.target.files[0];
    console.log(this.account_logo);
  }

onCreateAccount(){
  const formData=new FormData()
  formData.append('accountName',this.createAccountForm.get('accountName')?.value);
  formData.append('logo',this.account_logo);
  this.accountService.createAccount(formData).subscribe();
}














  showmodal() {
    const modalOverlay=document.getElementById("modal-overlay")
    const modal=document.getElementById("modal")
    const modalContent=document.getElementById("modal-content")
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
  const modalOverlay=document.getElementById("modal-overlay")
  const modal=document.getElementById("modal")
  const modalContent=document.getElementById("modal-content")
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
