import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherPageRoutingModule } from './teacher-routing.module';

import { TeacherPage } from './teacher.page';
import { LoginComponent } from 'src/app/components/login/login.component';
import { AnswersComponent } from 'src/app/components/answers/answers.component';
import { QuestionaryConfigComponent } from 'src/app/components/questionary-config/questionary-config.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    TeacherPageRoutingModule
  ],
  declarations: [
    TeacherPage,
    QuestionaryConfigComponent,
    AnswersComponent,
    LoginComponent
  ]
})
export class TeacherPageModule {}
