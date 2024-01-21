import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public login_form: FormGroup;
	public submitted = false;
  public error: string = "";

  constructor(private user: UserService, private formBuilder: FormBuilder, private router:Router) {
    this.login_form = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  get form() { 
    return this.login_form.controls; 
  }

  signIn() {
    this.error = "";
    this.submitted = true;
    this.user.login(this.login_form.value)
    .then(success => {
      this.router.navigate(['/list'])
    })
    .catch(error => {
      console.log(error)
      this.error = error
    })
  }
}
