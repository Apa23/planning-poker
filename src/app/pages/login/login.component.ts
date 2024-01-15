import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signIn } from 'aws-amplify/auth';
import { GameDataService } from '../../../app/services/game-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private gameDataService: GameDataService
  ) {}

  async onLogin(event: any) {
    try {
      let user = await signIn({
        username: event.userEmail,
        password: event.password,
      });
      console.log(`Auth with ${event.userEmail}, ${event.password}`);
      if (user.isSignedIn) {
        console.log('login success');
        const userData = this.gameDataService.getPlayerInfo();
        this.gameDataService.setPlayerInfo({ ...userData, login: true });
        this.router.navigate(['/new-game']);
      }
    } catch (err: any) {
      if (err.name === 'UserAlreadyAuthenticatedException') {
        console.log('login success from exception');
        const userData = this.gameDataService.getPlayerInfo();
        this.gameDataService.setPlayerInfo({ ...userData, login: true });
        this.router.navigate(['/new-game']);
        return;
      }
      console.log('error signing in', err);
    }
  }
}
