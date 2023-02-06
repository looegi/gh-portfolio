import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Observable } from 'rxjs'
import { GithubService } from '../github.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit  {
  user$: Observable<User> | undefined; // $ suffix  is used to indicate that the variable is an Observable.
  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
      this.user$ = this.githubService.getUser();
  }
}
