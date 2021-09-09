import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss'],
})
export class AnswersComponent implements OnInit {
  public answers;
  private showAlertMessage = new ShowAlertMessage();
  constructor(private apiService: ApiService, private router: Router,
    private modalCtrl: ModalController) { }
  ngOnInit() {
    this.getAnswers();
  }

  public getAnswers(){
    this.apiService.getAllWithoutHeaders<any>('answers').subscribe(response => {
      this.answers = response;
    }, (error: HttpErrorResponse) => {
      this.showAlertMessage.showErrorAlert(error.error.message_error);
    });
  }

  public close() {
    this.modalCtrl.dismiss();
  }
}
