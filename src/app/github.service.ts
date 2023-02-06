import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private userUrl: string = '';

  constructor(private http: HttpClient) 
  {
    this.userUrl = `${environment.apiUrl}/users/${environment.username}`;
   }
  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl)
  };

}
