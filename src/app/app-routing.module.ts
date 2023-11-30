import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { GameViewComponent } from './pages/game-view/game-view.component';

const routes: Routes = [
  { path: '', component: CreateGameComponent },
  { path: 'game', component: GameViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
