import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service.service';
import { Account } from '../account';

@Component({
  selector: 'app-subscribe-channels',
  templateUrl: './subscribe-channels.component.html',
  styleUrls: ['./subscribe-channels.component.css']
})
export class SubscribeChannelsComponent implements OnInit {
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

   ishidden= false;
  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);
  }
}
