import { Component } from '@angular/core';
import { SavingAccountService } from '../saving-account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-saving-account',
  templateUrl: './create-saving-account.component.html',
  styleUrls: ['./create-saving-account.component.css']
})
export class CreateSavingAccountComponent {
  constructor(private savingAccount:SavingAccountService,private toastr:ToastrService){}

// create saving account
  onCreateSavingAccount(){
    this.savingAccount.createSavingAccount().subscribe(
      (response)=>{
        console.log(response);
        this.toastr.success("You Created Saving Account Successfully!");
      },
      (error)=>{
        this.toastr.error("you are already created saving account")
      }
    );
  }

}
