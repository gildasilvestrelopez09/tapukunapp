import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';
import { Question } from 'src/app/models/question';
import { ApiService } from 'src/app/services/api.service';
import { QuestionaryFillComponent } from '../questionary-fill/questionary-fill.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  @Input() questions: Array<Question>;
  @Input() student: any;
  public question;
  private showAlertMessage = new ShowAlertMessage();
  constructor(private apiService: ApiService,
    private modalCtrl: ModalController) { }

  ngOnInit() {}

  public getValue(event) {
    event.detail.value;
  }

  public go(id){
    this.apiService.getByCode<any>('question', id).subscribe(response => {
      this.question = response;
      this.goToQuestion();
    }, (error: HttpErrorResponse) => {
      this.showAlertMessage.showErrorAlert(error.error.message_error);
    });
  }

  public async goToQuestion() {
    const modal = await this.modalCtrl.create({
      component: QuestionaryFillComponent,
      componentProps: {
        question: this.question,
        student: this.student
      }
    });
    await modal.present();
  }

  public close() {
    this.modalCtrl.dismiss();
  }
}
