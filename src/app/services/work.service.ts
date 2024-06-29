
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Work } from '../models/work';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  apiUrl="https://localhost:44368/api/works/";
  constructor(private httpClient:HttpClient) { }

  getWorks():Observable<ListResponseModel<Work>>{
    let newPath=this.apiUrl+"getAll";
    return this.httpClient.get<ListResponseModel<Work>>(newPath);
  }
  getWorksByCategoryId(categoryId:number):Observable<ListResponseModel<Work>>{
    let newPath=this.apiUrl+"getbycategoryid?categoryid="+categoryId;
    return this.httpClient.get<ListResponseModel<Work>>(newPath);
  }
  add(work:Work):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",work);
  }
}
