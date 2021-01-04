import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'client';
  genders : any;

  constructor (private http: HttpClient){ }
  
  ngOnInit() {
    
    this.getGenders();

  } 
  getGenders(){
    this.http.get('https://localhost:44399/api/MasterData/GetAllGender').subscribe(res=> {
      this.genders = res;
    }, error => {
      console.log(error);
    });

  }

}
