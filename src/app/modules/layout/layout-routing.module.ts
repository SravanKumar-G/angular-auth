import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { LayoutComponent } from "../components/layout/layout.component";
import { SitesComponent } from "../components/sites/sites.component";
import { UsersComponent } from "../components/users/users.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "users", component: UsersComponent },
      { path: "sites", component: SitesComponent },
      { path: "", redirectTo: "/layout/dashboard", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
