import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'quetionaries',
    loadChildren: () => import('./pages/quetionaries/quetionaries.module').then( m => m.QuetionariesPageModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./pages/teacher/teacher.module').then( m => m.TeacherPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
