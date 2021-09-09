import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswersComponent } from 'src/app/components/answers/answers.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { QuestionaryConfigComponent } from 'src/app/components/questionary-config/questionary-config.component';

import { TeacherPage } from './teacher.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherPage
  },
  {
    path: 'questionary-config',
    component: QuestionaryConfigComponent
  },
  {
    path: 'answers',
    component: AnswersComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPageRoutingModule {}
