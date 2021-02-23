import { TidyService } from './../tidy.service';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss'],
})
export class CreateprojectComponent implements OnInit {

  projectName: string = "";

  constructor(private toastCtrl: ToastController, private service: TidyService) { }

  ngOnInit() {}

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  addProject(){
    if (this.projectName.length > 1){
      this.service.addProject(this.projectName).then(
        data => {
          if (data == "success"){
            this.projectName = "";
            this.presentToast("Project succesvol toegevoegd!");
          } else {
            this.presentToast("Woops! something went wrong!");
          }
        }, error => {
          this.presentToast(error);
        });

    }
  }

}
