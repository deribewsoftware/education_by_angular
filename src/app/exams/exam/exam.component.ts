import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { ExamsCategory } from '../exam';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit{
  constructor(private service:ExamService,private router: Router){}

  tabItem='EUEE';
  exams:ExamsCategory[] = [];
  FreshmanExams:ExamsCategory[] = [];
  CocExams:ExamsCategory[] = [];
  ExitExams:ExamsCategory[] = [];
  isBought!:any[];
  isFresmanBought!:any[];
  isCOCBought!:any[];
  isExitBought!:any[];
  userId=Number(sessionStorage.getItem('user'))

  onTap(tabs:any){
    this.tabItem=tabs;

  }



  ngOnInit(): void {
this.ongetExamEUEE();
this.ongetExamFreshman();
this.ongetExamCoc();
this.ongetExamExit();
  }




  //get EUEE
ongetExamEUEE(){
  return this.service.getExamByType({examType:'EUEE'}).subscribe(
    (response)=>{
      this.exams = response
      this.isBought = response.map((exam) =>
      exam.buyers.some((user) => user.userId === this.userId)
    );
      console.log(response);
      console.log(this.isBought);
    }
  );
}




//Get Freshman Exams
ongetExamFreshman(){
  return this.service.getExamByType({examType:'Freshman'}).subscribe(
    (response)=>{
      this.isFresmanBought = response.map((exam) =>
      exam.buyers.some((user) => user.userId === this.userId)
    );
      this.FreshmanExams= response
      console.log(response)
    }
  );
}


//get Coc Exams
ongetExamCoc(){
  return this.service.getExamByType({examType:'Coc'}).subscribe(
    (response)=>{
      this.isCOCBought= response.map((exam) =>
      exam.buyers.some((user) => user.userId === this.userId)
    );
      this.CocExams = response
      console.log(response)
    }
  );
}

//get Exit Exams
ongetExamExit(){
  return this.service.getExamByType({examType:'Exit'}).subscribe(
    (response)=>{
      this.isExitBought= response.map((exam) =>
      exam.buyers.some((user) => user.userId === this.userId)
    );
      this.ExitExams = response
      console.log(response)
    }
  );
}




//navigate to EUEE Exams

navigateToExamDetails(index: number) {
  if (this.isBought[index]) {
    // If the exam is bought, navigate to a different page
    this.router.navigate(['/exams',this.exams[index].examType,this.exams[index].subject]);
  } else {
    // If the exam is not bought, navigate to another page
    this.router.navigate(['/exam/payment', this.exams[index].id]);
  }
}


//navigate freshman exams

navigateToFreshmanExams(index: number) {
  if (this.isFresmanBought[index]) {
    // If the exam is bought, navigate to a different page
    this.router.navigate(['/exams',this.FreshmanExams[index].examType,this.FreshmanExams[index].subject]);
  } else {
    // If the exam is not bought, navigate to another page
    this.router.navigate(['/exam/payment', this.FreshmanExams[index].id]);
  }
}
//navigate coc exams
navigateToCOCExams(index: number) {
  if (this.isCOCBought[index]) {
    // If the exam is bought, navigate to a different page
    this.router.navigate(['/exams',this.CocExams[index].examType,this.CocExams[index].subject]);
  } else {
    // If the exam is not bought, navigate to another page
    this.router.navigate(['/exam/payment', this.CocExams[index].id]);
  }
}


//navigate Exit exams
navigateToExitExams(index: number) {
  if (this.isExitBought[index]) {
    // If the exam is bought, navigate to a different page
    this.router.navigate(['/exams',this.ExitExams[index].examType,this.ExitExams[index].subject]);
  } else {
    // If the exam is not bought, navigate to another page
    this.router.navigate(['/exam/payment', this.ExitExams[index].id]);
  }
}


ishidden= false;
  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);
  }

}
