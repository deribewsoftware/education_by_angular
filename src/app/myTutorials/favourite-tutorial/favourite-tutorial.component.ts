import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/accounts/account';
import { AccountService } from 'src/app/accounts/account-service.service';

@Component({
  selector: 'app-favourite-tutorial',
  templateUrl: './favourite-tutorial.component.html',
  styleUrls: ['./favourite-tutorial.component.css']
})
export class FavouriteTutorialComponent implements OnInit {
  constructor(private accountService:AccountService){}
 mySubscribeChannels!:Account[]
 userId=Number(sessionStorage.getItem('user'));
  ngOnInit(): void {
      this.allAccounts();
  }


  allAccounts():void{
    this.accountService.allAccounts().subscribe(
      (response)=>{
        this.mySubscribeChannels=response.filter((account)=>account.subscribers.some((subscriber)=>subscriber.userId==this.userId))
        console.log(this.mySubscribeChannels);
      }
    );

  }

}
