import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class SecureGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(["/layout"]);
    }
    return !this.auth.isLoggedIn();
  }
}
