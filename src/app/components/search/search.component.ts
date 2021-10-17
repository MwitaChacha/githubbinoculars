import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: any;
  user: any;
  constructor(private githubService: GithubService) {
      this.githubService.getUser().then(user => {
        this.user = user;
      })
   }

  ngOnInit(): void {
  }

  
}
