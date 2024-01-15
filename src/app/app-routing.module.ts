import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { GameViewComponent } from './pages/game-view/game-view.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'new-game', component: CreateGameComponent },
  { path: 'game', component: GameViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
