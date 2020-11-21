import { AuthGuard } from './auth.guard';

import { LoginDetailsComponent } from './login-module/login-details/login-details.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-module/login-component/login-component.component';

const routes: Routes = [
  {path : '',component : LoginComponentComponent},
  {path : 'login_details',component : LoginDetailsComponent,canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
