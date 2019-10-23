import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signUpForm = this.fb.group({
    email: [''],
    siteName: [''],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

}
