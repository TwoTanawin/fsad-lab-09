
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  title = "Student Login Form"
  credentials = {
    email: null,
    password: null,
  }

  onSubmit(){
    alert("You just logged in with " + this.credentials.email  + " and " +
      this.credentials.password);
  }
}

