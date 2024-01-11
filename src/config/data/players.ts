import { GAMEMODE } from '../enums/game.enum';
import { playerInfoInterface } from '../interfaces/player.interface';
import { FIBONACCI } from './game.constant';

export const playersList: playerInfoInterface[] = [
  {
    name: 'John',
    initials: 'Jo',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,

  },
  {
    name: 'Dan',
    initials: 'Da',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,

  },
  {
    name: 'Angie',
    initials: 'An',
    gameMode: GAMEMODE.JUGADOR,
    selected: false,
    selectedNumber: null,
    host: false,

  },
  {
    name: 'Mark',
    initials: 'Mr',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,

  },
  {
    name: 'Peter',
    initials: 'Pe',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,

  },
  {
    name: 'Luis',
    initials: 'Lu',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,
  },
  {
    name: 'Maria',
    initials: 'Ma',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,

  },
];
