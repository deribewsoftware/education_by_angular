import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-layout-component',
  templateUrl: './card-layout-component.component.html',
  styleUrls: ['./card-layout-component.component.css']
})
export class CardLayoutComponentComponent {

  @Input() categories!:any[];
  @Input() categorySelected!:string;
  @Input() categoryType!:string;

}
