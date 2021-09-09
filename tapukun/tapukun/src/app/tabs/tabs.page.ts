import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public logo = "trivia/src/assets/logo.jpeg"
  constructor(private router: Router,) {}

  public login(){
    this.router.navigate(['teacher/login/']);
  }
  public goToQuestionary(){
    this.router.navigate(['quetionaries/welcome/']);
  }
}
