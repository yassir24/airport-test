import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.myForm.valid) {
      this.router.navigateByUrl('/dashboard')
    } else {
      alert('Invalid Email or Password')
    }
    
  }

}
