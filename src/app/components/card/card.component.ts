import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

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
  @Input() accountId!:number;
  @Input() accountDirection!:string;
  @Input() department!:any;
  @Input() routeOne!:any;
  @Input() routeTwo!:any;
}
