import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { TopicComponent } from './components/pages/topic/topic.component';
import { UpdateUserComponent } from './components/pages/update-user/update-user.component';
import { TopicFormComponent } from './components/pages/home/topic-form/topic-form.component';
import { TopicListComponent } from './components/pages/home/topic-list/topic-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopicListItemComponent } from './components/pages/home/topic-list/topic-list-item/topic-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    TopicComponent,
    RegisterComponent,
    UpdateUserComponent,
    TopicFormComponent,
    TopicListComponent,
    TopicListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
