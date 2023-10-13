import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../exam.service';
import { Exam, ExamsCategory } from '../exam';

@Component({
  selector: 'app-euee',
  templateUrl: './euee.component.html',
  styleUrls: ['./euee.component.css']
})
export class EueeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private examsService: ExamService) {}

  subject: any;
  exams: ExamsCategory[]=[]; // An array to hold the filtered exams

  ngOnInit(): void {
    this.subject = this.route.snapshot.paramMap.get('subject');
    this.onGetExams();
  }





  // Get exams by subject and year
  onGetExams(): void {
    this.examsService.getExamBySubject({
      subject: `${this.subject}`,

      examType: 'EUEE'
    }).subscribe(
      (response) => {
        this.exams=response
        console.log(response);
        console.log(this.subject);
      },
      (error) => console.log(error),
      () => console.log('Fetch exams successfully')
    );
  }


  tabItem='all';
  //on tab
  onTap(tabs:any){
    this.tabItem=tabs;

  }
  ishidden = false;

  onhidden($event: boolean) {
    this.ishidden = $event;
    console.log(this.ishidden);
  }
}
