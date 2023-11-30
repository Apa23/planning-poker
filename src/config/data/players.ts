import { GAMEMODE } from '../enums/game.enum';
import { playerInfoInterface } from '../interfaces/player.interface';

export const playersList: playerInfoInterface[] = [
  { name: 'John', mode: GAMEMODE.JUGADOR, selected: true, selectedNumber: 1 },
  { name: 'Dan', mode: GAMEMODE.JUGADOR, selected: true, selectedNumber: 2 },
  {
    name: 'Angie',
    mode: GAMEMODE.JUGADOR,
    selected: false,
    selectedNumber: null,
  },
  { name: 'Mark', mode: GAMEMODE.JUGADOR, selected: true, selectedNumber: 3 },
  { name: 'Peter', mode: GAMEMODE.JUGADOR, selected: true, selectedNumber: 4 },
  { name: 'Luis', mode: GAMEMODE.JUGADOR, selected: true, selectedNumber: 5 },
  { name: 'Maria', mode: GAMEMODE.JUGADOR, selected: true, selectedNumber: 6 },
];
