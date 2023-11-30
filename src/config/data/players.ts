import { GAMEMODE } from '../enums/game.enum';
import { playerInfoInterface } from '../interfaces/player.interface';

export const playersList: playerInfoInterface[] = [
  {
    name: 'John',
    initials: 'Jo',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: 1,
  },
  {
    name: 'Dan',
    initials: 'Da',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: 2,
  },
  {
    name: 'Angie',
    initials: 'An',
    gameMode: GAMEMODE.JUGADOR,
    selected: false,
    selectedNumber: null,
  },
  {
    name: 'Mark',
    initials: 'Mr',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: 3,
  },
  {
    name: 'Peter',
    initials: 'Pe',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: 4,
  },
  {
    name: 'Luis',
    initials: 'Lu',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: 5,
  },
  {
    name: 'Maria',
    initials: 'Ma',
    gameMode: GAMEMODE.ESPECTADOR,
    selected: true,
    selectedNumber: 6,
  },
];
