import { Repo } from './../../models/repo';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: any;
  user!: User;
  repos: Repo[] = [];
  constructor(private githubService: GithubService) {
      
   }

  ngOnInit(): void {
  }

   search(){

    this.githubService.updateUsername(this.username);

    this.githubService.getUser().then(user => {
      this.user = user;
    })
    this.githubService.getRepos().then(repos => {
      this.repos = repos;
    })
   }
  
}
