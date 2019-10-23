import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

}
