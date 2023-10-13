import { Component, OnInit } from '@angular/core';
import { SavingAccountService } from '../saving-account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saving-account',
  templateUrl: './saving-account.component.html',
  styleUrls: ['./saving-account.component.css']
})
export class SavingAccountComponent implements OnInit {
constructor(private savingService:SavingAccountService,private formsBuilder:FormBuilder){}

transactionForm!:FormGroup;
receiptId:any;
  ishidden= false;
  saveId!:number;
  mySavingAccount:any;

  ngOnInit(): void {
    // this. onCreatePaymenOnSaving();
    this.transactionForm=this.formsBuilder.group({
      bankTransactionId:['',Validators.required],
      saveBalance:['',Validators.required],
      receipt:[null]


    })

      this.onMyAccount();
  }


  // on file selected
  onFileSelected(event: any): void {

    this.receiptId = event.target.files[0];
    console.log(this.receiptId);



  }
//saving account
  onMyAccount(): void {
    this.savingService.mySavingAccount().subscribe(
      (response) =>{
        this.mySavingAccount = response
        this.saveId = response.id;
        console.log(this.saveId);
        console.log(response);
      },
      (err) =>{console.log(err)},
      () =>{console.log('my balance is fetched successfully')}
    );
  }

  //create transactions

  onCreatePaymenOnSaving():void{
    if (this.transactionForm.valid) {
      const formData = new FormData();
      formData.append('receipt', this.receiptId);
      formData.append('saveBalance', this.transactionForm.get('saveBalance')?.value.toString()); // Convert to string
      formData.append('bankTransactionId', this.transactionForm.get('bankTransactionId')?.value);

console.log(this.transactionForm.get('saveBalance')?.value.toString())

    this.savingService.onCreatePaymenOnSaving(this.saveId,formData).subscribe(
      (response:any)=>{
        console.log(response);
      }
    );
    }
  }


  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);
  }

}
