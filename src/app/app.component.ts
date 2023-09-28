import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '13.2-angular-testing';

  users: User[] = []

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users) => {
        console.log(users)
        this.users = users
      })
    this.userService.getCustomUser()
      .subscribe((user) => {
        console.log(user)
        // this.users = users
      })

  }
}
