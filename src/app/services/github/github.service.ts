import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from './../../models/user';
import { Repo } from 'src/app/models/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string = "MwitaChacha";


  constructor(private httpClient: HttpClient) {
   }

   getUser(): Promise<User>{
    return this.httpClient.get<User>(`https://api.github.com/users/${this.username}`)
    .toPromise();
  }

  getRepos(): Promise<Repo[]>{
    return this.httpClient.get<Repo[]>('https://api.github.com/users/' + this.username+'/repos')
    .toPromise();
  }

  updateUsername(username: string) {
this.username = username;
  }
}


