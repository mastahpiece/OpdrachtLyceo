import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss'],
})
export class CreateprojectComponent implements OnInit {

  projectName: string = "";

  constructor(private http: HttpClient, private toastCtrl: ToastController) { }

  ngOnInit() {}

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  addTidy(){
    if (this.projectName.length > 1){
      this.http.post("http://127.0.0.1:8000/api/project", {
        naam_project: this.projectName
      }).toPromise().then( data => {
        if (data['message'] == "project created successfully"){
          this.projectName = "";
          this.presentToast("Tidy succesvol toegevoegd!");
        }
        else {
          this.presentToast("Woops! something went wrong!");
        }
      });
    }
  }

}
