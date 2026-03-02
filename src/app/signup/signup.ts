import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class signup {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    console.log('Form Submitted', this.signupForm.value);
  }
  }
