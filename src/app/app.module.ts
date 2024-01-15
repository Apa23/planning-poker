import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewGameFormComponent } from './components/molecules/new-game-form/new-game-form.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { GameViewComponent } from './pages/game-view/game-view.component';
import { NewPlayerFormComponent } from './components/molecules/new-player-form/new-player-form.component';
import { GameDataService } from './services/game-data.service';
import { GameCardComponent } from './components/atoms/game-card/game-card.component';
import { PlayerCardComponent } from './components/molecules/player-card/player-card.component';
import { InvitePlayerComponent } from './components/molecules/invite-player/invite-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { InputLabelComponent } from './components/atoms/input-label/input-label.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { TitleComponent } from './components/atoms/title/title.component';
import { UserAreaComponent } from './components/molecules/user-area/user-area.component';
import { UserMenuComponent } from './components/molecules/user-menu/user-menu.component';
import { UserLogoComponent } from './components/atoms/user-logo/user-logo.component';
import { ModalComponent } from './components/organisms/modal/modal.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { TableComponent } from './components/organisms/table/table.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/molecules/login-form/login-form.component';

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
    ButtonComponent,
    InputComponent,
    InputLabelComponent,
    LogoComponent,
    HeaderComponent,
    TitleComponent,
    UserAreaComponent,
    UserMenuComponent,
    UserLogoComponent,
    ModalComponent,
    FooterComponent,
    TableComponent,
    LoginComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [GameDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
