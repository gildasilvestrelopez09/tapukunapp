import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AnswersComponent } from 'src/app/components/answers/answers.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

  constructor(private router: Router,  private apiService: ApiService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  createEvaluation() {
    this.router.navigate(['/teacher/questionary-config']);
  }

  public async viewResults() {
    const modal = await this.modalCtrl.create({
      component: AnswersComponent,
      componentProps: {}
    });
    await modal.present();
  }
}
