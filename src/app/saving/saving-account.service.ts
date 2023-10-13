import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Saving, Transaction } from './saving';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavingAccountService {

  constructor(private http:HttpClient) { }
  private saving_url = 'http://localhost:3000/saving'
  token=localStorage.getItem('token');

  createSavingAccount(): Observable<Saving>{
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    return this.http.post<Saving>(this.saving_url,{},{headers});
  }


  mySavingAccount(): Observable<Saving>{
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    return this.http.get<Saving>(this.saving_url, {headers});
  }



  //create Transactions
  onCreatePaymenOnSaving(saveId:number,savedata:any):Observable<Transaction> {
    const headers=new HttpHeaders ({
      Authorization: 'Bearer ' +this.token
    });
    return this.http.post<Transaction>(this.saving_url+`/payment/${saveId}`,savedata,{headers});
  }

  //get transactions list

  getTransctionList():Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.saving_url+`/transaction/alist`);
  }

  //approveTransaction
  approvedTransaction(transactionId:number){
    return this.http.patch(this.saving_url+`/transaction/${transactionId}`,{});
  }
}
