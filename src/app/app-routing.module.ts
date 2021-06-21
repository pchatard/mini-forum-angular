import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { TopicComponent } from './components/pages/topic/topic.component';
import { UpdateUserComponent } from './components/pages/update-user/update-user.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', canActivate: [LoginGuard], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'topic', canActivate: [LoginGuard], component: TopicComponent },
  { path: 'update-user', canActivate: [LoginGuard], component: UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
