import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-univerisities-refresh',
  templateUrl: './univerisities-refresh.component.html',
  styleUrls: ['./univerisities-refresh.component.css']
})
export class UniverisitiesRefreshComponent implements OnInit {

  constructor(private router:Router,private activeRoute:ActivatedRoute){}
  categoryId:any;

  ngOnInit(): void {
    this.categoryId=this.activeRoute.snapshot.paramMap.get("categoryId");

   this.router.navigate(['/courses/university',this.categoryId]);

}}
