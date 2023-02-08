import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Organization } from '../organization';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit  {
  orgs$: Observable<Organization[]> | undefined 
  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
      this.orgs$ = this.githubService.getOrganizations()
  }


}
