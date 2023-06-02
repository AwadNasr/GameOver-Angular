import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:BehaviorSubject<any>=new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('userToken') !==null){
      this.decode()
    }
   }
  register(formData:any):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formData)
  }
  login(formData:any):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formData)
  }
  decode(){
    let encode=JSON.stringify(localStorage.getItem('userToken'))
    let decoded:any=jwtDecode(encode)
    this.currentUser.next(decoded)
  }
  logout(){
    localStorage.removeItem('userToken')
    this.currentUser.next(null)
    this._Router.navigate(['/login'])
  }

}
