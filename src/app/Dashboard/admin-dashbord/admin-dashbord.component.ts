import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/courses/course';
import { CourseService } from 'src/app/courses/course.service';
import { Transaction } from 'src/app/saving/saving';
import { SavingAccountService } from 'src/app/saving/saving-account.service';
import { UserService } from 'src/app/users/service/user.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-admin-dashbord',
  templateUrl: './admin-dashbord.component.html',
  styleUrls: ['./admin-dashbord.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminDashbordComponent  implements OnInit,AfterViewInit {
  constructor(private savingService:SavingAccountService,private toastr:ToastrService,private userService:UserService,private courseService:CourseService,private formBuilder:FormBuilder){}
transactions!:Transaction[]
displayedColumns: string[] = ['id', 'photo','fullName','job','department','phone_no','role','update','delete'];
dataSource!: MatTableDataSource<User>;

columnsToApprovePayment = ['saveId','fullName', 'bankTransactionId', 'balance'];
  columnsToDisplayWithExpand = [...this.columnsToApprovePayment, 'expand'];
  expandedElement!: Transaction;
  CourseCategoryFormGroup!: FormGroup;
  categoryFormGroup!: FormGroup;
courseCover:any;
categories!:Category[];



@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
@ViewChild(MatAccordion) accordion!: MatAccordion;

//category



 selectedSubjects!:any[]




selecterValue!:string ;

onSelectValue(data:any,subjects:any[]){
  this.selecterValue=data;
  this.selectedSubjects=subjects;

}

  ngOnInit(): void {
    this.categoryFormGroup=this.formBuilder.group({
      category:['',Validators.required]
    });
    this.CourseCategoryFormGroup = this.formBuilder.group({

     department:[''],
      grade:[''],
     subject:['',Validators.required],

    })
      this.getTransctionList();
      this.allUsers();
      this.onGetCategories();
  }

ngAfterViewInit(): void {
  this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

}


  getTransctionList():void{
  this.savingService.getTransctionList().subscribe(
    (response)=>{
      this.transactions=response;

      console.log(response);
    },
    (error)=>console.log(error)
  );
  }

  //approveTransaction
  onApprovedTransaction(transactionId:number) {
    this.savingService.approvedTransaction(transactionId).subscribe(
      (response)=>{
        console.log(response);
        this.toastr.success('Approved transaction successfully')
      },
      (error)=>console.log(error)

    );
  }


  allUsers():void{
    this.userService.allUsers().subscribe(
      (response)=>{
        this.dataSource=new MatTableDataSource(response)
        console.log(response);

      },
      (error)=>console.log(error)
    );
  }


  //on course selection

  onCourseCoverSelect(event:any){
    this.courseCover=event.target.files[0]
  }
  //create Corse category data source

  createCourseCategory():void{
    const formData = new FormData();
    formData.append('cover',this.courseCover)
    formData.append('category',this.selecterValue)
    // Only append the fields if they have values


    if (this.CourseCategoryFormGroup.get('grade')?.value) {
      formData.append('grade', this.CourseCategoryFormGroup.get('grade')?.value);
    }
    formData.append('subject',this.CourseCategoryFormGroup.get('subject')?.value)


    this.courseService.createCourseCategory(Number(this.CourseCategoryFormGroup.get('department')?.value),formData).subscribe(
      (response)=>{

        this.toastr.success("Course category registration successfully");
        console.log(response);
      },
      (error)=>console.log(error)
    );
  }



// create category
createCategory():void{
  this.courseService.createCategory(this.categoryFormGroup.value).subscribe(
    (response)=>{
      console.log(response);
      this.toastr.success("Category created successfully!")
    },
    (error)=>console.log(error)
  );
}

//all categories
onGetCategories():void{
  this.courseService.allCategory().subscribe(
    (response)=>{
this.categories=response;

    },
    (error:any)=>console.log(error)
  );
}




   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ishidden= false;
  onhidden($event:boolean){
    this.ishidden = $event;
    console.log(this.ishidden);}
}
