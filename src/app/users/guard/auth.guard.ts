// // auth.guard.ts

// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';

// import { map } from 'rxjs/operators';
// import { UserService } from '../service/user.service';
// import { User } from '../user';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: UserService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.authService.myProfile().pipe<User>(
//       map((user) => {
//         if (user) {
//           return true; // User is authenticated, allow access
//         } else {
//           // User is not authenticated, redirect to login page
//           return this.router.createUrlTree(['/login']);
//         }
//       })
//     );
//   }
// }
