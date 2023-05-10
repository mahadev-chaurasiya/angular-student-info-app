import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-info';
  userData:any = [];
  constructor(private api:ApiService){
    this.getData()
  } 

  getData(){
    this.api.getApiClient().subscribe((data:any)=>{
      this.userData = data; 
      console.log(this.userData);
    });
  }
}
