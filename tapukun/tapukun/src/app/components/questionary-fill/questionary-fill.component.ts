import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-questionary-fill',
  templateUrl: './questionary-fill.component.html',
  styleUrls: ['./questionary-fill.component.scss'],
})
export class QuestionaryFillComponent implements OnInit {

  @Input() question: Question;
  @Input() student: any;
  private currentAnswer;
  private showAlert = new ShowAlertMessage();
  public time;
  public progress = 0;
  public options= [];
  public answer: Answer = {
    studentFullName: '',
    answer: '',
    elapsedTime: 0,
    score: 0,
    questionId: ''
  }
  private showAlertMessage = new ShowAlertMessage();
  constructor(public formBuilder: FormBuilder, private apiService: ApiService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.timer();
    this.question?.options && this.getOptions();
  }
  public getAnswer(event) {
    this.currentAnswer = event.detail.value;
  }

  public async save() {
    this.answer.studentFullName = this.student;
    this.answer.answer = this.currentAnswer;
    this.answer.elapsedTime = this.time;
    if (this.question.rightAnswer ===  this.currentAnswer) {
      this.answer.score = 1;
    }
    this.answer.questionId = this.question.id.toString();
    this.apiService.postWithoutHeaders("answer", this.answer).subscribe(
      (id: number) => {
        this.showAlert.showSuccessAlert('Respuesta guardada');
        this.close();
      },
      (error: HttpErrorResponse) => {
        this.showAlertMessage.showErrorAlert(
          `Ha ocurrido un error, vuelva a intentarlo`
        );
      }
    );
	}

  public timer(){
    this.time = this.question.deadTime;
    setInterval(function(){
      if (this.time > 0) {
        this.time--;
        this.progress += (100/this.question.deadTime)/100;
        if (this.time === 0) {
          this.close();
        }
      }
    }.bind(this), 1000);
  }

  public close() {
    this.modalCtrl.dismiss();
  }

  public getOptions(){
    this.options = (this.question?.options).split(',');
  }
}
