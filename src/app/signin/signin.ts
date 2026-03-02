import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  FormsModule, 
  ReactiveFormsModule, 
  Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class signin {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    console.log(this.signInForm.value);
  }
}
