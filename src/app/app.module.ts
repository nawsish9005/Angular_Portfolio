import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PagesComponent } from './frontEnd/pages/pages.component';
import { HomePageComponent } from './frontEnd/pages/home-page/home-page.component';
import { ProjectPageComponent } from './frontEnd/pages/project-page/project-page.component';
import { ContactPageComponent } from './frontEnd/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './frontEnd/pages/about-page/about-page.component';

import { LoginComponent } from './admin/login/login.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { AllProjectsComponent } from './admin/all-projects/all-projects.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './frontEnd/pages/header/header.component';
import { FooterComponent } from './frontEnd/pages/footer/footer.component';
import { EditProjectsComponent } from './admin/edit-projects/edit-projects.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PagesComponent,
    HomePageComponent,
    ProjectPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddProjectComponent,
    AllProjectsComponent,
    EditProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
