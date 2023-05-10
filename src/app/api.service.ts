import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getApiClient(){
    let url = "http://localhost:9191/student/v1/getALlStudentRecord";
    return this.http.get(url);
  }
}
