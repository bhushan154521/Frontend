import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
loginForm!:FormGroup;
isSubmitted=false;
constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', Validators.required, Validators.email],
      password:['',Validators.required]
    })
  }
  get fc(){
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid)return;

    alert('Email: ${this.fc.email.value},Password: ${this.fc.password.value}')
  }
}
