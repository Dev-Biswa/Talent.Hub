import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AccountType } from '../models/accountType.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private userService: UserService, 
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

  mapRegistrationValuesFromForm(): User{

    var val = this.formGroup.value;
    let user: User = new User();
    user.FirstName = val.firstName;
    user.LastName = val.lastName;
    user.UserName = val.userName;
    user.Password = val.password;

    return user;

  }

  public RegistrationHandler(){
    console.log(this.mapRegistrationValuesFromForm());
    this.userService.postUser(this.mapRegistrationValuesFromForm()).pipe()
    .subscribe(data => {
      console.log(data);
    });
  }

}
