import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
  })
  export class SignupService {

    constructor(private http: HttpClient) { 

    }
    /**
     * sign up new user
     */
    public signUp(singupObject:any) {
      console.log(JSON.stringify(singupObject));
      this.http.post(environment.SignUpApi,singupObject).subscribe(response=>{
        console.log(response);
      });
    }
  }