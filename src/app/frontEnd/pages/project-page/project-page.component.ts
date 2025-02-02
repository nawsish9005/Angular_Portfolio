import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/service/database-service.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent  implements OnInit{

  constructor(private service: DatabaseServiceService){}

  onlineProjects!: any;

  ngOnInit(): void {
    this.service.getAllProjects().subscribe(
      {
        next: r=>{
         this.onlineProjects = r;
        },
        error: e=>{
          console.log(e);
          
        }
      }
    )
  }
  
  defaultProjects =[
    {
      "projectImage": "https://pradeepl.com/blog/jwt/JWT-Cover.png",
      "projectName":"JWT Token",
      "appType":"Web Application API",
      "projectDescription":"This is My First Full Project With Rest Api and Angular. This is a project with authentication with JWT Token.",
      "projectLiveUrl":"",
      "projectGithubLink":"https://github.com/nawsish9005/JwtAuth.git",
      "programingLanguagesUsed":"#Angular, #.Net, #Core, #Scss, #Bootstrap, API, #Html #TypeScript",
    },
    {
      "projectImage": "",
      "projectName":"Naxian Fashion Api",
      "appType":"Spring Boot Rest Api",
      "projectDescription":"",
      "projectLiveUrl":"",
      "projectGithubLink":"",
      "programingLanguagesUsed":"",
    },
    {
      "projectImage": "",
      "projectName":"Naxian Fashion Api",
      "appType":"Spring Boot Rest Api",
      "projectDescription":"",
      "projectLiveUrl":"",
      "projectGithubLink":"",
      "programingLanguagesUsed":"",
    },

    {
      "projectImage": "",
      "projectName":"Naxian Fashion Api",
      "appType":"Spring Boot Rest Api",
      "projectDescription":"",
      "projectLiveUrl":"",
      "projectGithubLink":"",
      "programingLanguagesUsed":"",
    },

    // {
    //   "projectImage": "",
    //   "projectName":"",
    //   "appType":"",
    //   "projectDescription":"",
    //   "projectLiveUrl":"",
    //   "projectGithubLink":"",
    //   "programingLanguagesUsed":"",
    // },
    
  ]


}
