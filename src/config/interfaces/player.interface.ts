import { CARDMODE, GAMEMODE } from '../enums/game.enum';

export interface playerInfoInterface {
  name: string;
  initials: string;
  gameMode: GAMEMODE;
  selected: boolean;
  selectedNumber: number | null;
  host: boolean;
}

export interface gameInfoInterface {
  cardMode: CARDMODE;
  displayInviteModal: boolean;
}
