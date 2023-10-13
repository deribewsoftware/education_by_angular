import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Category, Course, CourseCategory } from '../course';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  constructor(private courseService:CourseService,private router:Router,private activateRouter:ActivatedRoute){}


  exams=[
    {
      "subject":"Biology",
      "type":[

        {
        "examType":"Exit Exam",
      },
      {
        "examType":"Final Exam",
      },
    ]
    }
  ]

category:any;
categories!:Category;
categorySelected="Courses";
isLoading=true;

   //user
   userId=Number(sessionStorage.getItem('user'))
   isSoftwareBought!:any[]
   isElectricalBought!:any[]
   softwareCourseIndex=1;
   isCourseBought!:any[]
   isVideoBought!:any[]
   isBookBought!:any[]
   isExamBought!:any[]



   ngOnInit(): void {

    this.category=this.activateRouter.snapshot.paramMap.get('category');

    this.onGetHighSchoolCourses();
    this.onGetCategories();
    this.engineeringCourses();
    this.onGetVideoBought();

   }

//on Tab

onTab(data:any){
  this.categorySelected=data;
}

   //all categories by Id



onGetCategories():void{
  this.courseService.categoryById(Number(this.category)).subscribe(
    (response)=>{
      this.categories=response;
      this.isLoading=false;
console.log("deribew",response.exams);
this.isCourseBought=response.courses.map((course)=>{
  return course.course.map((co)=>{
   return co.buyers.some((buyer)=>buyer.userId==this.userId);
  });
});

console.log("deribew",this.isCourseBought);




    },
    (error:any)=>{console.log(error)
      this.router.navigate(['/error']);
      this.isLoading=false;}
  );
}



   //on video bought category

   onGetVideoBought(): void {
    this.courseService.categoryById(Number(this.category)).subscribe(
      (response)=>{
        this.isLoading=false;


  this.isVideoBought=response.videos.map((vid)=>{
    return vid.videos.map((co)=>{
     return co.buyers.some((buyer)=>buyer.userId==this.userId);
    });
  });





      },
      (error:any)=>{this.isLoading=false;
        this.router.navigate(['/error']);
        console.log(error);}
    );
   }

//course navigation
onCourseNavigation(subjectIndex: number, courseIndex: number){

  if(this.isCourseBought[subjectIndex][courseIndex]){
    return this.router.navigate(['/course',this.categories.courses[subjectIndex].course[courseIndex].id]);

  }
  else{
    return this.router.navigate(['payment/course',this.categories.courses[subjectIndex].course[courseIndex].id]);
  }

}


//video/player/

//video navigation
onVideoNavigation(subjectIndex: number, videoIndex: number){

  if(this.isVideoBought[subjectIndex][videoIndex]){
    return this.router.navigate(['video/player',this.categories.videos[subjectIndex].id,this.categories.videos[subjectIndex].videos[videoIndex].id]);

  }
  else{
    return this.router.navigate(['video/payment',this.categories.videos[subjectIndex].videos[videoIndex].id]);
  }

}


// // book navigation
// onBookNavigation(subjectIndex: number, courseIndex: number){

//   if(this.isCourseBought[subjectIndex][courseIndex]){
//     return this.router.navigate(['/course',this.categories.courses[subjectIndex].course[courseIndex].id]);

//   }
//   else{
//     return this.router.navigate(['payment/course',this.categories.courses[subjectIndex].course[courseIndex].id]);
//   }

// }

// // exam navigation
// onExamNavigation(subjectIndex: number, courseIndex: number){

//   if(this.isCourseBought[subjectIndex][courseIndex]){
//     return this.router.navigate(['/course',this.categories.courses[subjectIndex].course[courseIndex].id]);

//   }
//   else{
//     return this.router.navigate(['payment/course',this.categories.courses[subjectIndex].course[courseIndex].id]);
//   }

// }



   engineeringCourses():void{
    this.courseService.EngineeringCourses().subscribe(
      (response) =>{





        // this.isSoftwareBought = response.map((courses) =>
        // courses.course.map((course) =>course.buyers.some((user) => user.userId === this.userId)));
        // this.isElectricalBought = this.allElectrical.map((courses) =>
        // courses.course.map((course) =>course.buyers.some((user) => user.userId === this.userId)));

      console.log(this.isSoftwareBought);
      },
      (error) =>console.log(error),
      () =>console.log("fetched Engineering course categories successfully")
    );
   }


   onGetHighSchoolCourses():void{
    this.courseService.getEngineeringCourses().subscribe(
      (response)=>{
        console.log(response);







      },
      (error)=>console.log(error),
      ()=>console.log('High School Course fetched successfully')
    );

   }




   ishidden= false;
  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);
  }

}
