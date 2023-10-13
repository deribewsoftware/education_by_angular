import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {
  constructor(private router:Router){}
user=localStorage.getItem('user');
  ngOnInit(): void {
    // if(this.user){this.router.navigate(['/courses']);}
    // else{this.router.navigate(['/']);}


  }

}
