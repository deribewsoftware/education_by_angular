import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subjects-refresh',
  templateUrl: './subjects-refresh.component.html',
  styleUrls: ['./subjects-refresh.component.css']
})
export class SubjectsRefreshComponent implements OnInit {
  constructor(private router:Router,private activeRoute:ActivatedRoute){}
  categoryId:any;
  subjectId:any;
  ngOnInit(): void {
    this.categoryId=this.activeRoute.snapshot.paramMap.get("categoryId");
    this.subjectId=this.activeRoute.snapshot.paramMap.get("subjectId");
   this.router.navigate(['/course/subject',this.categoryId,this.subjectId]);


}
}
