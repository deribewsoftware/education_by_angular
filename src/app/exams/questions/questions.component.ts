import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../exam.service';
import { Exam } from '../exam';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{


  constructor(private route:ActivatedRoute,private service:ExamService){}


  examRoute:any;
  examSubject:any;
  exams:Exam[] = [];
  ngOnInit(): void {
    this.examSubject=this.route.snapshot.paramMap.get('examsubject');
    this.examRoute = this.route.snapshot.paramMap.get('id');
    this.GetExamsBySubjectAndYear();

  }
  GetExamsBySubjectAndYear(){
    this.service.GetExamsBySubjectAndYear({year:this.examRoute}).subscribe(
      (response)=>{
        this.exams=response.filter((exam)=>exam.examCategory.subject===this.examSubject)
        console.log(response.filter((exam)=>exam.examCategory.subject===this.examSubject));
      },
      (error)=>console.log(error),
      ()=>console.log("fetched successfully")
    );
  }


  //on submit questions
  HideExplanation=true;
  onsubmit(){
    this.HideExplanation=false;
  }
}
