import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: any) {
    localStorage.setItem("token", token);
  }

  login({ email, password }: any): Observable<any> {
    if (email === "test@gmail.com" && password === "test123") {
      this.setToken("sdjfjoieyruwrjndsfoiuhyiwerb");
      return of({ Username: "Test User", MobileNumber: "9897988765" });
    }
    return throwError(() => new Error("Invalid details..!"));
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }
}
