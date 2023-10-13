import { Component, Input, OnInit } from '@angular/core';
import { SavingAccountService } from 'src/app/saving/saving-account.service';

import { UserService } from 'src/app/users/service/user.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent  implements OnInit {
  constructor(private userService:UserService,private savingService:SavingAccountService){}
@Input() showSidebar:any;

account=localStorage.getItem('account');
account_logo=localStorage.getItem('account_logo');
savingAccount:any;

ngOnInit(): void {
  this.onGetUser();
  this.onCreatesavingAccount();

}

onGetUser():void {
  this.userService.myProfile().subscribe(
    (response)=>{

      localStorage.setItem('userId',(response.id).toString())
      this.savingAccount=response.saving;
      console.log(this.savingAccount)



    },
    (err)=>console.log(err),
    ()=>console.log("saving account  data received")

  );
}


//create Saving Accounts

onCreatesavingAccount():void {
  this.savingAccount.createSavingAccount().subscribe(
    (response:any)=>{
      console.log(response);
    },
    (error:any)=>console.log(error),
    ()=>console.log("saving account success")
  );

}










//modals

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
