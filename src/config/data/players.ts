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
  },
  {
    name: 'Dan',
    initials: 'Da',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
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
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
  },
  {
    name: 'Peter',
    initials: 'Pe',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
  },
  {
    name: 'Luis',
    initials: 'Lu',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
  },
  {
    name: 'Maria',
    initials: 'Ma',
    gameMode: GAMEMODE.JUGADOR,
    selected: true,
    selectedNumber: FIBONACCI[Math.floor(Math.random() * FIBONACCI.length)],
  },
];
