import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Category, Course } from '../course';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/accounts/account-service.service';
import { Account } from 'src/app/accounts/account';
import { animate, style, transition, trigger } from '@angular/animations';
import { UserService } from 'src/app/users/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
  animations: [
    trigger('bannerAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(0)' }),
        animate('500ms ease-out', style({ transform: 'translateX(-100%)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(0)' }),
        animate('500ms ease-out', style({ transform: 'translateX(100%)' }))
      ]),
    ]),
  ],
})
export class CourselistComponent implements OnInit{
constructor(private courseService:CourseService,private router:Router
  ,private activateRouter:ActivatedRoute,
  private accountService:AccountService,
  private userService:UserService,
  private toastr:ToastrService){}
//banner
activeIndex = 0;
images = ["../../../assets/banner3.jpg","../../../assets/bannerst4.jpeg", "../../../assets/banner4.jpg","../../../assets/bannerst2.jpg","../../../assets/banner5.jpg","../../../assets/bannerst3.jpg", "../../../assets/banner6.png", /* Add more images as needed */];

changeBanner(next: boolean) {
  this.activeIndex = (next ? this.activeIndex + 1 : this.activeIndex - 1) % this.images.length;
}


rToken:any=localStorage.getItem('rt');
//category
categories!:Category[];

//user
userId=Number(localStorage.getItem('user'));

 courses:Course[]=[];
  isCourseBought:any[]=[]
 course!: Course;
 newCourses!:Course[]
 courseCount!:number;
videoCount!:number;
 bookCount!:number;
 categorySelected="Courses";
 popularChannels!:Account[];
ngOnInit(): void {
  this.allAccounts();
  this.onGetNewCourses();
  this.onGetCategories();
    this.onGetCourses();
    this.userService.onRefereshToken().subscribe(
      (response)=>{console.log(response)
        this.toastr.success("refresh successfully");

        localStorage.setItem('rt', response.refresh_token);
        localStorage.setItem('at', response.access_token);
        console.log("success",this.rToken);


      },
      (error)=>{
        this.toastr.error("error of refresh token")
        console.log(error)
        console.log("error",this.rToken);

        console.log("error",localStorage.getItem('rt'));
      }
    )
this.rToken=localStorage.getItem('refresh_token');
    // this.onCreateCourse();
}
onTab(data:any){
  this.categorySelected=data;
}

allAccounts():void{
  this.accountService.allAccounts().subscribe(
    (response)=>{
      this.popularChannels=response;

    }
  );

  setInterval(() => {
    this.changeBanner(true); // Change to the next image
  }, 3000);

}


onGetNewCourses():void{
  this.courseService.getAllCourses().subscribe(
    (response)=>{


      this.newCourses=response;

      this.newCourses.forEach(course => {
        course.createdAt = new Date(course.createdAt);
      });


      this.newCourses.sort((a,b)=>b.createdAt.getTime()-a.createdAt.getTime())


      this.isCourseBought=this.courses.map((course)=>{
       return  course.buyers.some((buyer)=>buyer.userId==this.userId);

      });
      console.log(this.isCourseBought);
    },

    (error)=>{ this.router.navigate(['/error']);
    console.log(error)},
    ()=>console.log("Courses list is done")

    );

}
onGetCourses():void{
  this.courseService.getAllCourses().subscribe(
    (response)=>{
this.courses=response;

      this.courses.sort((a,b)=>b.buyersCount-a.buyersCount);
      console.log(this.courses);
      this.isCourseBought=this.courses.map((course)=>{
       return  course.buyers.some((buyer)=>buyer.userId==this.userId);

      });
      console.log(this.isCourseBought);
    },

    (error:any)=>{this.router.navigate(['/error']);console.log(error)},
    ()=>{
    console.log("Courses list is done")}

    );

}


//all categories
onGetCategories():void{
  this.courseService.allCategory().subscribe(
    (response)=>{
      this.categories=response;
},
(error:any)=>{this.router.navigate(['/error']);console.log(error)},
  );
}







onCourseNavigation(courseIndex: number){

  if(this.isCourseBought[courseIndex]){
    return this.router.navigate(['/course',this.courses[courseIndex].id]);

  }
  else{
    return this.router.navigate(['payment/course',this.courses[courseIndex].id]);
  }

}





// onCreateCourse(): void {
//   this.courseService.createCourse(this.course).subscribe(
//     (response:any)=>console.log(response),
//     (error:any)=>console.log(error),
//     ()=>console.log("Course  is done")

//   );
// }

  ishidden= false;
  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);
  }
}
