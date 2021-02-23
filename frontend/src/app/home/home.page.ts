import { TidyService } from './../tidy.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tidies: any;
  projects: any;
  selectedProject: any;

  constructor(private http: HttpClient, private service: TidyService, private router: Router) {}

  ionViewWillEnter(){
    this.getTidies();
    this.getAllProjects();
  }

  getTidies(){
    this.service.getAllTidies().then(
      data => {
        this.tidies = data;
      }
    )
  }

  async doRefresh(event: any){
    await this.getTidies();
    await this.getAllProjects();
    this.selectedProject = null;
    event.target.complete();
  }

  doStuff(){
    if (this.selectedProject == 0 || !this.selectedProject){
      this.getTidies();
    } else {
      this.service.getTidiesByProjectId(this.selectedProject).then(
        data => {
          this.tidies = data;
        });
    }
  }

  async getAllProjects(){
    this.service.getAllProjects().then(
      data => this.projects = data
    )
  }
}
