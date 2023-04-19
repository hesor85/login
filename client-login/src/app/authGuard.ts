import { inject } from "@angular/core";
import { UserService } from "./user.service"
import { of } from "rxjs";

// Example of a authentication guard that makes a simple check if a user is logged in
export const authGuard = () => {
  const userService = inject(UserService);
  console.log('auth')
  return of(userService.loggedInUser !== null);
}
