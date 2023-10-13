import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private userService:UserService){}


  user!: User;
  account:any;


  backgroundColors: string[] = [
    '#FF5733', '#FFC300', '#36A2EB', '#4CAF50', '#E91E63', '#9C27B0'
  ];

  // Generated random background color
  profileBackgroundColor!: string;


  ngOnInit(): void {
    // Assign a random background color from the list
    this.profileBackgroundColor = this.backgroundColors[
      Math.floor(Math.random() * this.backgroundColors.length)
    ];
      this.onGetProfile();
  }

  onGetProfile():void{
    this.userService.myProfile().subscribe(
      (response)=>{
        this.user = response
        localStorage.setItem('userId',(response.id).toString())

        localStorage.setItem('department',response.department)
        this.account = response.account;
        console.log(response);
      },
      (err)=>console.log(err),
      ()=>console.log("profile data received")

    );
  }
  ishidden= false;
  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);
  }
}
