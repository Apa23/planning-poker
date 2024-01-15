import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() login: EventEmitter<{
    userEmail: string | null | undefined;
    password: string | null | undefined;
  }> = new EventEmitter();

  userLoginForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onLogin = () => {
    this.login.emit({
      userEmail: this.userLoginForm.get('userEmail')?.value,
      password: this.userLoginForm.get('password')?.value,
    });
  };
}
