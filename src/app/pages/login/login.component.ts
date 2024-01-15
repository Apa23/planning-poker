import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { GameDataService } from 'src/app/services/game-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userEmail: string = '';
  userPassword: string = '';

  constructor(
    private router: Router,
    private gameDataService: GameDataService
  ) {}

  async onLogin(event: any) {
    try {
      let user = await Auth.signIn(this.userEmail, this.userPassword);
      console.log('Auth with' + this.userEmail + this.userPassword);
      let tokens = user.signInUserSession;
      if (tokens != null) {
        console.log('login success');
        const userData = this.gameDataService.getPlayerInfo();
        this.gameDataService.setPlayerInfo({ ...userData, login: true });
        this.router.navigate(['/new-game']);
      }
    } catch (err) {
      console.log('error signing in', err)
    }
  }
}
