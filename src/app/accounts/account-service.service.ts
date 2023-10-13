import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  private account_api='http://localhost:3000/account';
  token=localStorage.getItem('at');
  // 'detail/:id'



  //create account
  createAccount(accountData:any):Observable<Account> {
    const headers=new HttpHeaders({
      Authorization: 'Bearer '+this.token
    })
    return this.http.post<Account>(this.account_api,accountData,{headers});
  }
  //get account by id
  getAccountById(id:number): Observable<Account> {
    const headers=new HttpHeaders({
      Authorization: 'Bearer '+this.token
    })
    return this.http.get<Account>(this.account_api+`/detail/${id}`,{headers});
  }

  //your account
  myChannel():Observable<Account> {
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    return this.http.get<Account>(this.account_api,{headers});
  }


  // update account

  updateAccount(accountId:number,data:any):Observable<Account> {
    const headers=new HttpHeaders ({

      Authorization: 'Bearer ' +this.token
    });
    return this.http.patch<Account>(this.account_api+`/${accountId}`,data,{headers});
  }


  //subscribe account
  subscribeAccount(accountId:number){
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    return this.http.post(this.account_api+`/${accountId}`,{},{headers});
  }
  //get all account lists
  allAccounts():Observable<Account[]> {
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    return this.http.get<Account[]>(this.account_api+'/accounts/alist',{headers});
  }
}
