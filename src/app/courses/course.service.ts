import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Course, CourseCategory } from './course';
import { Lesson } from './lessons/lesson';
import { Chapter } from './chapters/chapter';
import { Content } from './lessons/contents/content';

@Injectable({
  providedIn: 'root'
})
export class CourseService {



  constructor( private http:HttpClient) { }
  category_url='http://localhost:3000/category/department'
  base_url='http://localhost:3000/course';
  lesson_url='http://localhost:3000/lesson';
  chapter_url='http://localhost:3000/chapter';
  content_url='http://localhost:3000/content';
  token=localStorage.getItem('access_token');

  getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.base_url)
  }

  getCourse(id:number): Observable<Course>{
    return this.http.get<Course>(this.base_url+`/detail/${id}`)
  }

  // create course api

  createCourse(course:Course): Observable<Course>{
    return this.http.post<Course>(this.base_url,course);
  }


  //update course

  // updateCourse(course:Course): Observable<Course>{}



  //LESSONS SECTION

  //get course lesson
  getlesson(id:number):Observable<Lesson>{
    const headers=new HttpHeaders({
      Authorization: 'Bearer '+this.token
    })
    return this.http.get<Lesson>(this.lesson_url+`/detail/${id}`,{headers})
  }

  //create lesson

  createlesson(chapterId:number,data:any):Observable<Lesson> {
    const headers=new HttpHeaders({
      Authorization: 'Bearer '+this.token
    })
    return this.http.post<Lesson>(this.lesson_url+`/create/${chapterId}`,data,{headers})
  }

  //update Lesson
  updateLesson(lessonId:number,data:any):Observable<Lesson>{
    const headers=new HttpHeaders({
      Authorization: 'Bearer '+this.token
    })
    return this.http.patch<Lesson>(this.lesson_url+`/update/${lessonId}`,data,{headers})
  }


  // on get highschool  courses
  onGetHighSchoolCourses(): Observable<Course[]>{
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    const params = new HttpParams()
    .set('category', 'Highschool')
    // .set('subject', queryParams.subject)
    // .set('grade', queryParams.grade)
    const options = { headers, params };
    return this.http.get<Course[]>(this.base_url,options);
  }

  //get Engineering Courses
  getEngineeringCourses(): Observable<Course[]>{
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    const params = new HttpParams()
    .set('category', 'Engineering')
    // .set('subject', queryParams.subject)
    // .set('grade', queryParams.grade)
    const options = { headers, params };
    return this.http.get<Course[]>(this.base_url,options);
  }


  allCourssCategory():Observable<CourseCategory[]>{
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    return this.http.get<CourseCategory[]>(this.base_url+'/category/alist',{headers});
  }
getCourseCategoryById(CourseCatId: number):Observable<CourseCategory>{
  return this.http.get<CourseCategory>(this.base_url+`/category/${CourseCatId}`);
}

  EngineeringCourses(): Observable<CourseCategory[]>{
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });

    const params = new HttpParams()
    .set('category', 'Engineering')
    const options = { headers, params };
    return this.http.get<CourseCategory[]>(this.base_url+'/category/alist',options);

  }


  AllCourses(): Observable<Course[]>{
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });


    return this.http.get<Course[]>(this.base_url,{headers});

  }





  createCourses(accoundId:number,courseId:number,data:any):Observable<Course>{
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });

    return this.http.post<Course>(this.base_url+`/${accoundId}/${courseId}`,data,{headers});
  }

  createCourseCategory(categoryId:any,data:any):Observable<CourseCategory>{
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    return this.http.post<CourseCategory>(this.base_url+`/category/${categoryId}`,data,{headers});
  }





  //make payment on Courses
  onBuyCourse(courseId:number){
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    return this.http.post(this.base_url+`/payment/course/${courseId}/`,{},{headers});
  }

//NEW

allCategory():Observable<Category[]>{
  return this.http.get<Category[]>(this.category_url+'/alist');

}

categoryById(categoryId:number):Observable<Category>{
  return this.http.get<Category>(this.category_url+`/${categoryId}`);

}


createCategory(data:any):Observable<Category>{return this.http.post<Category>(this.category_url+'/create', data);}



//CHAPTERS
//create chapter
createChapter(courseId:number,data:any):Observable<Chapter>{
  return this.http.post<Chapter>(this.chapter_url+`/${courseId}`,data);

}
//get all chapters
getAllChapters():Observable<Chapter[]>{
  return this.http.get<Chapter[]>(this.chapter_url);
}
//create Contents;

createContents(lessonId:number,data:any):Observable<Content>{
  return this.http.post<Content>(this.content_url+`/create/${lessonId}`,data);
}

//get content by id
getContentById(contentId:number):Observable<Content>{
  return this.http.get<Content>(this.content_url+`/detail/${contentId}`);
}

// update content
updateContent(contenId:number,data:any):Observable<Content>{
  const headers = new HttpHeaders();
headers.set('Content-Type', 'multipart/form-data');
  return this.http.patch<Content>(this.content_url+`/update/${contenId}`,data,{headers});

}

}
