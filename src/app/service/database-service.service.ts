import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  constructor(private http:HttpClient) { }


  private url = "https://toothsome-crowd-production.up.railway.app/"

  private projectTableUrl = "api/v1/projects"


  public getAllProjects(){
    return this.http.get(this.url + this.projectTableUrl);
  }

  public addProject(data: any){
    return this.http.post(this.url + this.projectTableUrl, data);
  }

  public putProject(id: number, data: any){
    return this.http.put(this.url + this.projectTableUrl + "/" + id, data);
  }

  public deleteProject(id: number){
    return this.http.delete(this.url + this.projectTableUrl + "/" + id);
  }

}
