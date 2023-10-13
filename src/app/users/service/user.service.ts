import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tokens, User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private api='http://localhost:3000/auth';


  Atoken=localStorage.getItem('at');
  Rtoken=localStorage.getItem('rt');


  myProfile():Observable<User>{
    const headers=new HttpHeaders({
      Authorization: 'Bearer ' +this.Atoken
    })
    return this.http.get<User>(`${this.api}`,{headers});
  }




  procedRegister(InputData:any){
    return this.http.post(`${this.api}/signup`,InputData);
  }

  //Login user
  login(InputData:any){
    return this.http.post(`${this.api}/login`,InputData);
  }

  //logout user

  onLogouUser(){
    const headers=new HttpHeaders({
      Authorization: 'Bearer ' +this.Atoken
    })
    return this.http.post(this.api+`/logout`,null,{headers});
  }


//refresh token
onRefereshToken():Observable<Tokens>{
  const headers=new HttpHeaders({
    Authorization: 'Bearer ' +this.Rtoken
  })
  return this.http.post<Tokens>(this.api+`/refresh-token`,null,{headers});
}



//update user
  updateRegister(InputData:any){
    return this.http.put(`${this.api}/signup`,InputData);
  }

  //get all users

  allUsers():Observable<User[]>{
    return this.http.get<User[]>(this.api+'/alluser/alist');

  }
}
