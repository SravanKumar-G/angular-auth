import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { LoginComponent } from "./auth/login/login.component";
import { NotFoundComponent } from "./auth/not-found/not-found.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from "./guards/auth.guard";
import { SecureGuard } from "./guards/secure.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [SecureGuard] },
  { path: "signup", component: SignupComponent, canActivate: [SecureGuard] },
  {
    path: "forgot",
    component: ForgotPasswordComponent,
  },
  {
    path: "layout",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./modules/layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
