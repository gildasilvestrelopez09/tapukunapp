import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuetionariesPageRoutingModule } from './quetionaries-routing.module';

import { QuetionariesPage } from './quetionaries.page';
import { QuestionaryFillComponent } from 'src/app/components/questionary-fill/questionary-fill.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from 'src/app/components/questions/questions.component';
import { WellcomeComponent } from 'src/app/components/wellcome/wellcome.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    QuetionariesPageRoutingModule
  ],
  declarations: [
    QuetionariesPage,
    WellcomeComponent,
    QuestionaryFillComponent,
    QuestionsComponent
  ]
})
export class QuetionariesPageModule {}
