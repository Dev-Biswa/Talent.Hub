import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
  ) { }
  formGroup: FormGroup;


  ngOnInit() {

    this.formInit(); 
  }

  public formInit() {
    this.formGroup = this.fb.group({
      userName: [""],
      password: [""],
    });
  }

}
