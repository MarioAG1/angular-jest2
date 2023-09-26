import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Geo, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getCustomUser(): Observable<Geo> {
    return this.http
      .get<User>('https://jsonplaceholder.typicode.com/users/1')
      .pipe(map((user) => user.address.geo));
  }
}
