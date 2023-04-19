import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'abp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  newUser = {
    name: '',
    email: '',
    password: ''
  }
  registerUser() {
    this.userService.signup(this.newUser).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
