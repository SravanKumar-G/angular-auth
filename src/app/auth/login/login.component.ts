import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public logObject = { email: "", password: "" };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // public loginForm = new FormGroup({
  //   username: new FormControl(""),
  //   password: new FormControl(""),
  // });

  onSubmit(): void {
    // if (this.loginForm.valid) {
    this.auth.login(this.logObject).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(["/layout"]);
      },
      (error) => {
        alert(error);
      }
    );
    // }
  }
}
