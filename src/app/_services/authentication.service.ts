import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseURL = 'http://localhost:5000/api/auth/';

constructor(private http: HttpClient) { }

login(model: any)
{
  return this.http.post(this.baseURL + 'login', model)
  .pipe(
    map((response: any) => {
      const user = response; //will be JWT response
      if( user ) {
        localStorage.setItem('token', user.token)
      }
    }
    )
  )
}

}