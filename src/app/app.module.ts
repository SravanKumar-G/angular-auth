import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ForgotPasswordComponent } from "./auth/forgot-password/forgot-password.component";
import { NotFoundComponent } from "./auth/not-found/not-found.component";
import { DashboardComponent } from "./modules/components/dashboard/dashboard.component";
import { UsersComponent } from "./modules/components/users/users.component";
import { SitesComponent } from "./modules/components/sites/sites.component";
import { LayoutComponent } from './modules/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    DashboardComponent,
    UsersComponent,
    SitesComponent,
    LayoutComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
