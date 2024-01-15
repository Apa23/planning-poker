import { GAMEMODE } from '../enums/game.enum';
import { PlayerInfoInterface } from '../interfaces/player.interface';
import { FIBONACCI } from './game.constant';

export const playersList: PlayerInfoInterface[] = [
  {
    name: 'John',
    initials: 'Jo',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,
    login: true,
  },
  {
    name: 'Dan',
    initials: 'Da',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,
    login: true,
  },
  {
    name: 'Angie',
    initials: 'An',
    gameMode: GAMEMODE.JUGADOR,
    selected: false,
    selectedNumber: null,
    host: false,
    login: true,
  },
  {
    name: 'Mark',
    initials: 'Mr',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,
    login: true,
  },
  {
    name: 'Peter',
    initials: 'Pe',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,
    login: true,
  },
  {
    name: 'Luis',
    initials: 'Lu',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,
    login: true,
  },
  {
    name: 'Maria',
    initials: 'Ma',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
    host: false,
    login: true,
  },
];
