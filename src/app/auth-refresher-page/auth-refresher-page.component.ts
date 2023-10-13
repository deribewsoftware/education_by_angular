import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth-refresher-page',
  templateUrl: './auth-refresher-page.component.html',
  styleUrls: ['./auth-refresher-page.component.css']
})
export class AuthRefresherPageComponent implements OnInit {
  constructor(private userService:UserService,
    private toastr:ToastrService){}
  ngOnInit(): void {
    this.userService.onRefereshToken().subscribe(
      (response)=>{console.log(response)
        this.toastr.success("refresh successfully");

        localStorage.setItem('rt', response.refresh_token);
        localStorage.setItem('at', response.access_token);



      },
      (error)=>{
        this.toastr.error("error of refresh token")
        console.log(error)

        console.log("error",localStorage.getItem('rt'));
      }
    )
  }

}
