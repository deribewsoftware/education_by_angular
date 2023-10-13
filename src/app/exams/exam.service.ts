import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam, ExamsCategory } from './exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http:HttpClient) { }

  private exam_api='http://localhost:3000/category';
  private question_api='http://localhost:3000/exam/alist';

  token=sessionStorage.getItem('token');


  //get exam by id

  getExamById(id:number):Observable<ExamsCategory> {
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    return this.http.get<ExamsCategory>(this.exam_api+`/exam/${id}`,{headers});
  }

//get all ExamsCategory

getAllExam():Observable<ExamsCategory[]>{
  const headers=new HttpHeaders ({
    Authorization: 'Bearer ' +this.token
  });
  return this.http.get<ExamsCategory[]>(this.exam_api,{headers});
}

  getExamBySubject(queryParams: { subject: string, examType:string }):Observable<ExamsCategory[]>{
    const params = new HttpParams()
      .set('subject', queryParams.subject)
      .set('examType', queryParams.examType)

    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    const options = { headers, params };
    return this.http.get<ExamsCategory[]>(this.exam_api,options);
  }


  getExamByType(queryParams: { examType:string }):Observable<ExamsCategory[]>{
    const params = new HttpParams()

      .set('examType', queryParams.examType)

    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    const options = { headers, params };
    return this.http.get<ExamsCategory[]>(this.exam_api,options);
  }

  //get exams by subject  and year
  GetExamsBySubjectAndYear(queryParams: { year:number}):Observable<Exam[]>{
    const params = new HttpParams()

      .set('year', queryParams.year.toString())

    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    const options = { headers, params };
    return this.http.get<Exam[]>(this.question_api,options);
  }


  //make payment on exams
  onBuyExam(examId:number){
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    return this.http.post(this.exam_api+`/${examId}/payment`,{},{headers});
  }
}
