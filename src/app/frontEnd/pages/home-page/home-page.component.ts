import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    
    const dots = this.elementRef.nativeElement.querySelectorAll('.dot');
    dots.forEach((dot: HTMLElement, index: number) => {
      dot.style.animation = `dotAnimation 5s linear infinite ${index / 30}s`;
    });
    

  }
  programingLanguages=[
        {
          "name": ".Net",
          "image": "assets/image/resiged/dotnet.jpg"
        },
        {
          "name": ".Net Core",
          "image": "assets/image/resiged/core.png"
        },
        {
          "name": "Java",
          "image": "assets/image/resiged/java.png"
        },
        {
          "name": "Spring",
          "image": "assets/image/resiged/spring.png"
        },
        {
          "name": "Spring Boot",
          "image": "assets/image/resiged/springBoot.png"
        },
        {
          "name": "PHP",
          "image": "assets/image/resiged/PHP.png"
        },
        {
          "name": "Oracle Database",
          "image": "assets/image/resiged/oracle2.png"
        },
        {
          "name": "MySql Database",
          "image": "assets/image/resiged/mySql.png"
        },
        {
          "name": "Angular",
          "image": "assets/image/resiged/angular.png"
        },
        {
          "name": "JavaScript",
          "image": "assets/image/resiged/javascript-img.png"
        },
        {
          "name": "TypeScript",
          "image": "assets/image/resiged/typescript_logo.png"
        },
        {
          "name": "Scss",
          "image": "assets/image/resiged/sass.png"
        },
        {
          "name": "Css",
          "image": "assets/image/resiged/css3.png"
        },
        {
          "name": "Bootstrap",
          "image": "assets/image/resiged/bootstrap-logo.png"
        },
        {
          "name": "Html",
          "image": "assets/image/resiged/html.png"
        },
        {
          "name": "Desktop App",
          "image": "assets/image/resiged/swing.png"
        },
        {
          "name": "Git",
          "image": "assets/image/resiged/git.png"
        },
    
  ];


  
  defaultProjects =[
    {
      "projectImage": "https://live.staticflickr.com/65535/52912673780_9928a7bbfd.jpg",
      "projectName":"Naxian Fashion",
      "appType":"Web Application",
      "projectDescription":"This is My First Full Project With Rest Api and Angular. This is an Online Store where u can sell and buy Anything.",
      "projectLiveUrl":"https://naxianfashion-7b928.web.app/",
      "projectGithubLink":"https://github.com/Riyaz-mazumder/Naxian_Fashion_Angular",
      "programingLanguagesUsed":"#Angular, #Java, #Spring, #Spring Boot, #Scss, #Bootstrap, #Html #TypeScript",
    },
    {
      "projectImage": "https://live.staticflickr.com/65535/52911715777_275d413dd6_z.jpg",
      "projectName":"Naxian Fashion Api",
      "appType":"Spring Boot Rest Api",
      "projectDescription":"This is The Rest Api Of Naxian Fashion Project.",
      "projectLiveUrl":"https://juicy-camera-production.up.railway.app/",
      "projectGithubLink":"https://github.com/Riyaz-mazumder/Naxian_Fashion_Rest_Api_SpringBoot.git",
      "programingLanguagesUsed":"#Java, #Spring, #Spring Boot",
    },
    {
      "projectImage": "https://live.staticflickr.com/65535/52911724947_39cb86d15e.jpg",
      "projectName":"Feni Bank",
      "appType":"Desktop Application",
      "projectDescription":"This is A Bank Application, Created With Java Swing",
      "projectLiveUrl":"This project is not hosted on the internet",
      "projectGithubLink":"https://github.com/Riyaz-mazumder/FeniBank_JavaSwing_Application.git",
      "programingLanguagesUsed":"#Java, #Java Swing",
    },

    {
      "projectImage": "https://live.staticflickr.com/65535/52912758703_d97b8c549d_z.jpg",
      "projectName":"Birth Day Wishing Web Site",
      "appType":"Web Site",
      "projectDescription":"This is a Birth day wishin web site, by that web site you can wish your loved one",
      "projectLiveUrl":"https://mitubirthday.netlify.app/",
      "projectGithubLink":"https://github.com/Riyaz-mazumder/birthDayWissingApplication",
      "programingLanguagesUsed":"#JavaScript",
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
