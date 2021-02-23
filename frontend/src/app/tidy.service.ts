import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TidyService {

  selectedProject: any;

  constructor(private http: HttpClient) { }

  getAllTidies(){
    var that  = this;
    return new Promise(function(resolve, reject) {
      that.http.get("http://127.0.0.1:8000/api/tidy").toPromise().then(
        data => {
          resolve(data);
        }, error => reject(error));
    });
  }

  getAllProjects(){
    var that = this;
    return new Promise(function(resolve, reject){
      that.http.get("http://127.0.0.1:8000/api/project").subscribe(
        data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getTidiesByProjectId(projectId: number){
    var that = this;
    return new Promise(function(resolve, reject){
      that.http.get(`http://127.0.0.1:8000/api/tidy/${projectId}`).subscribe(
        data => {
          resolve(data);
        }, error => {
          reject(error)
        });
    });
  }

  addTidy(naam: string, beschrijving: string, projectId: string){
    var that = this;
    return new Promise(function(resolve,reject){
      that.http.post("http://127.0.0.1:8000/api/tidy", {
        naam: naam,
        beschrijving: beschrijving,
        project_id: projectId
      }).subscribe( data => {
        if (data['message'] == "Tidy created successfully"){
          resolve('success');
        } else {
          reject("Something went wrong!")
        }
      }, error => {
        reject(error);
      })
    });
  }

  addProject(naam: string){
    var that = this;
    return new Promise(function(resolve,reject){
      that.http.post("http://127.0.0.1:8000/api/project", {
        naam_project: naam
      }).subscribe( data => {
        if (data['message'] == "project created successfully"){
          resolve('success');
        }
        else {
          reject('Something went wrong');
        }
      }, error => {
        reject(error);
      });
    });
  }
}
