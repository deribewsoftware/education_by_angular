import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courselist-refresh',
  templateUrl: './courselist-refresh.component.html',
  styleUrls: ['./courselist-refresh.component.css']
})
export class CourselistRefreshComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigate(['courses']);

  }}
