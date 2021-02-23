import { TidyService } from './../tidy.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss'],
})
export class CreatetaskComponent implements OnInit {

  tidyName: string;
  tidyDescription: string;
  selectedProject: string;

  projects: any;

  constructor(private service: TidyService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.getAllProjects();
  }

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  getAllProjects(){
    this.service.getAllProjects().then( data => this.projects = data);  
  }

  addTidy(){
    this.service.addTidy(this.tidyName,this.tidyDescription,this.selectedProject).then(
      data => {
        if (data == 'success'){
          this.tidyName = "";
          this.tidyDescription = "";
          this.selectedProject = "";
          this.presentToast("Tidy succesvol toegevoegd!");
        } else {
          this.presentToast("Something went wrong!");
        }
      }).catch( error => {
        this.presentToast(error);
      })
  }

}
