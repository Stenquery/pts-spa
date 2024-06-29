import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { Observable } from 'rxjs';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:44368/api/auth/";
  private httpClient:HttpClient=inject(HttpClient);
  constructor() { }
  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel);
  }
  isAuthenticated():boolean{
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }
}
