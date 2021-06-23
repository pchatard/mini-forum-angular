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
import { MessageFormComponent } from './components/pages/topic/message-form/message-form.component';
import { MessageListComponent } from './components/pages/topic/message-list/message-list.component';
import { MessageListItemComponent } from './components/pages/topic/message-list/message-list-item/message-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

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
    TopicListItemComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
