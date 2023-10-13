import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/courses/course';
import { CourseService } from 'src/app/courses/course.service';
import { UserService } from 'src/app/users/service/user.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService:UserService,private courseService:CourseService,private toastr:ToastrService,private router:Router){}
  user!: User;
  category!: Category[];
  @Input() showSidebar:any;

  @Input() subject!: string;
  @Input() allSubject: any[]=[];
  @Input() grade: any;


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
      this.ongetcategory();
      // this.onLogouUser();
  }

  onGetProfile():void{
    this.userService.myProfile().subscribe(
      (response)=>{
        this.user = response
        localStorage.setItem('user',response.id.toString());
        localStorage.setItem('account',response.account.accountName)
        localStorage.setItem('account_logo',response.account.accountLogo)

      },
      (err)=>console.log(err),
      ()=>console.log("profile data received")

    );
  }



 itemsNav='';

isShown:boolean = false;
  showdropdownItems(toolbar:string){
    if(toolbar===this.itemsNav){
      this.itemsNav='';
    }
    else{
      this.itemsNav=toolbar;
    }
console.log(this.itemsNav)
}
ishown=false;

@Output() ishidden=new EventEmitter<boolean>();
onToggle(){
if(this.ishown){this.ishidden.emit(false);
this.ishown=false;}
else{this.ishidden.emit(true);
  this.ishown=true;}


}

ongetcategory():void{
  this.courseService.allCategory().subscribe(
    (response)=>{
      this.category=response;
    },



    (error)=>{}
  );
}

//on logout user'

onLogouUser():void{
  this.userService.onLogouUser().subscribe(
    (response)=>{
      console.log("logout",response);
      this.toastr.success("You Successfully Logout")
      localStorage.clear();
      this.router.navigate(['/'])
    },
    (error)=>{this.toastr.error("can't log out")
  console.log("logoutError",error)}
  );
}

}
