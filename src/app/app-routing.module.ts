import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './frontEnd/pages/about-page/about-page.component';
import { ContactPageComponent } from './frontEnd/pages/contact-page/contact-page.component';
import { HomePageComponent } from './frontEnd/pages/home-page/home-page.component';
import { ProjectPageComponent } from './frontEnd/pages/project-page/project-page.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { AllProjectsComponent } from './admin/all-projects/all-projects.component';



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'aboutMe', component: AboutPageComponent},
  {path: 'contactMe', component: ContactPageComponent},
  {path: 'projects', component: ProjectPageComponent},
  { path: 'addNewProject', component: AddProjectComponent },
  { path: 'allProjects', component: AllProjectsComponent },


  { path: 'admin', component: LoginComponent },
  {
    path: 'admin/dashbord',
    component: AdminComponent,

    children: [
      { path: '', component: AdminComponent },
      { path: 'addNewProject', component: AddProjectComponent },
      { path: 'allProjects', component: AllProjectsComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
