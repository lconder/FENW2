import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import {RecordService} from "../../services/record.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public userService: UserService,
    private _builder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm = this._builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(values) {
    console.log(values);
  }


}
