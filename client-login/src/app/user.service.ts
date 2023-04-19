import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInUser = null;

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post('/login', user);
  }

  signup(user) {
    return this.http.post('/signup', user);
  }
}
