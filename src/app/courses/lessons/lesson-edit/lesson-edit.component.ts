import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.css']
})
export class LessonEditComponent {
 notes!:any;
 title!:any;
 onNoteChange(events: any) {
  this.notes = events.target.value;
  console.log(this.notes);
 }
}
