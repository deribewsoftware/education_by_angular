import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-course-card',
  templateUrl: './my-course-card.component.html',
  styleUrls: ['./my-course-card.component.css']
})
export class MyCourseCardComponent {

  @Input() subject!: string;
  @Input() grade!: number;
  @Input() likes!: number;
  @Input() views!: number;
  @Input() lessons!: number;
  @Input() price!: number;
  @Input() subscribers!: number;
  @Input() account_name!: string;
  @Input() account_logo!: string;
  @Input() cover!: string;
  @Input() routerDirect!:string;
  @Input() cardId!:number;
}
