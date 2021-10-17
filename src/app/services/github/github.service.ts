import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string = "MwitaChacha";


  constructor(private httpClient: HttpClient) {
   }

   getUser(): Promise<User>{
    return this.httpClient.get<User>('https://api.github.com/users/' + this.username)
    .toPromise();
  }

  getRepos(){
    return this.httpClient.get<any[]>('https://api.github.com/users/' + this.username+'/repos')
    .toPromise();
  }

  updateUsername(username: string) {
this.username = username;
  }
}


