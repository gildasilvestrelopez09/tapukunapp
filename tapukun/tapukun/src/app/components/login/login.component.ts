import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';
import { LoginSuccess } from 'src/app/models/login';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl(''),
	});
  private showAlertMessage = new ShowAlertMessage();
  constructor(public formBuilder: FormBuilder, private apiService: ApiService,
    private router: Router, private modalCtrl: ModalController, private userService: UserService,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
			email: ["", [Validators.required,Validators.pattern(
				/[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)
			]],
			// tslint:disable-next-line:max-line-length
			password: ["", [Validators.required, Validators.minLength(8), Validators.pattern(
				/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
			]]
		});
  }

  public isInvalid(formControlName: string) {
		const control = this.loginForm.controls[formControlName];
		return !control.valid && (control.dirty || control.touched);
	}

	public hasErrorControl(formControlName, errorType) {
		return this.loginForm.controls[formControlName].errors[errorType];
	}

	public async login() {
		this.apiService.postWithoutHeaders('login', this.loginForm.value)
      .subscribe((response: LoginSuccess) => {
        this.userService.setCurrentUser(response.token, "token");
        this.userService.setCurrentUser(response.id, "user");
        this.showAlertMessage.showSuccessAlert("Bienvenid@..!");
        this.router.navigate(['/teacher/']);
      },
        (error: HttpErrorResponse) => {
          this.showAlertMessage.showErrorAlert("Datos incorrectos, vuelva a intentarlo");
        });
	}

	public registerUser() {
		this.router.navigate(['/register']);
	}
}
