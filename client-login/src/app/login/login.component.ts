import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'abp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  loginFailed = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  login() {
    this.userService.login(this.user).subscribe((result: any) => {
      console.log(result)
      if (result) {
        this.userService.loggedInUser = result;
        this.router.navigate(['/home']);
      } else {
        this.loginFailed = true;
      }

    });
  }
}
