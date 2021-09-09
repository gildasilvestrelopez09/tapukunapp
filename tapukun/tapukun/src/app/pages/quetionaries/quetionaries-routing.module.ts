import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionaryFillComponent } from 'src/app/components/questionary-fill/questionary-fill.component';
import { QuestionsComponent } from 'src/app/components/questions/questions.component';
import { WellcomeComponent } from 'src/app/components/wellcome/wellcome.component';

import { QuetionariesPage } from './quetionaries.page';

const routes: Routes = [
  {
    path: '',
    component: QuetionariesPage
  },
  {
    path: 'welcome',
    component: WellcomeComponent,
  },
  {
    path: 'questionary-fill',
    component: QuestionaryFillComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuetionariesPageRoutingModule {}
