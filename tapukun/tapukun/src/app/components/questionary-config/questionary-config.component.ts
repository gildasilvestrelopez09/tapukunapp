import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-questionary-config',
  templateUrl: './questionary-config.component.html',
  styleUrls: ['./questionary-config.component.scss'],
})
export class QuestionaryConfigComponent implements OnInit {
  public requests: Array<any> = [];
  public notes: Array<any> = [];

  public questionaryConfigForm = new FormGroup({
		name: new FormControl(''),
		description: new FormControl(''),
    deadTime: new FormControl(''),
    accessCode: new FormControl('')
	});

  public form: FormGroup;
  private showAlertMessage = new ShowAlertMessage();
  constructor(public formBuilder: FormBuilder, private apiService: ApiService,
    private router: Router, private modalCtrl: ModalController, private userService: UserService,) { }

  ngOnInit() {
    this.questionaryConfigForm = this.formBuilder.group({
			name: ['',[Validators.required, Validators.minLength(3),
        Validators.maxLength(50), Validators.pattern("[A-Za-zñÑÀ-ÿ ]*")]],
      description: ['',[Validators.minLength(10),
        Validators.maxLength(150)]],
      deadTime: ['',[Validators.required]],
      accessCode: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(5)]]
		});

    this.form = this.formBuilder.group({
      notes: this.formBuilder.array([this.initY()]),
      requests: this.formBuilder.array([this.initX()])
    });
  }

  public initX(): any {
    return this.formBuilder.group({
      requisito: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]]
    });
  }

  public addX(): void {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const control = <FormArray> this.form.controls['requests'];
    control.push(this.initX());
  }

  public removeX(index: number): void {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const control = <FormArray> this.form.controls['requests'];
    control.removeAt(index);
  }

  public initY(): any {
    return this.formBuilder.group({
      note: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]]
    });
  }
  public addY(): void {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const control = <FormArray> this.form.controls['notes'];
    control.push(this.initY());
  }

  public removeY(index: number): void {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const control = <FormArray> this.form.controls['notes'];
    control.removeAt(index);
  }


  public isInvalid(formControlName: string) {
		const control = this.questionaryConfigForm.controls[formControlName];
		return !control.valid && (control.dirty || control.touched);
	}

	public hasErrorControl(formControlName, errorType) {
		return this.questionaryConfigForm.controls[formControlName].errors[errorType];
	}

	public async login() {
		this.apiService.postWithoutHeaders('questionary', this.questionaryConfigForm.value)
      .subscribe((response) => {
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
