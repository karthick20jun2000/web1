import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  loginform = new FormGroup({
    username: new FormControl('', [Validators.email, Validators.required]),
    age: new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(2),
      Validators.required,
    ]),
  });

  ngOnInit(): void {}
  hadleclick() {}
}
