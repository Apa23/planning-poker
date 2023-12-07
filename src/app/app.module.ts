import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewGameFormComponent } from './components/new-game-form/new-game-form.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { GameViewComponent } from './pages/game-view/game-view.component';
import { NewPlayerFormComponent } from './components/new-player-form/new-player-form.component';
import { GameDataService } from './services/game-data.service';
import { GameCardComponent } from './components/game-card/game-card.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { InvitePlayerComponent } from './components/invite-player/invite-player.component';
import { NotificationComponent } from './components/shared/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameFormComponent,
    CreateGameComponent,
    GameViewComponent,
    NewPlayerFormComponent,
    GameCardComponent,
    PlayerCardComponent,
    InvitePlayerComponent,
    NotificationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [GameDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
