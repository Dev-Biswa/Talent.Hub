import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AccountType } from '../models/accountType.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
  ) { }
  formGroup: FormGroup;
  accountTypes: AccountType[] = [];
  email: FormControl;
  password:FormControl;

  ngOnInit() {
    this.initLookUps();
    this.createFormControls();
    this.formInit(); 
  }

  public createFormControls(){
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    
  }

  public formInit() {
    this.formGroup = this.fb.group({
      type: [""],
      firstName: [""],
      lastName: [""],
      userName: [""],
      email: this.email,
      password: this.password,
      confirmPassword:[""],
    });
  }

  public initLookUps() {
    this.accountTypes = [
      { Id: 1, Value: "Actors" },
      { Id: 2, Value: "Models" },
    ]
  }

}
