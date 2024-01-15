import { CARDMODE, GAMEMODE } from '../enums/game.enum';

export interface PlayerInfoInterface {
  name: string;
  initials: string;
  gameMode: GAMEMODE;
  selected: boolean;
  selectedNumber: number | null;
  host: boolean;
  login: boolean;
}

export interface GameInfoInterface {
  cardMode: CARDMODE;
  displayInviteModal: boolean;
}
