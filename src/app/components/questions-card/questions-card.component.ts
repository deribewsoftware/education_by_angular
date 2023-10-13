import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions-card',
  templateUrl: './questions-card.component.html',
  styleUrls: ['./questions-card.component.css']
})
export class QuestionsCardComponent {
@Input() Q_no!:number;
@Input() question!:string;
@Input() choose!:any[];
@Input() explanation!:string;
@Input() hideExplanation!:boolean;

explanationData:any;
onExplanation(data:any){



  if(this.explanationData!=data){
    this.explanationData = data;
  }
  else{ this.explanationData = null;}

}

}
