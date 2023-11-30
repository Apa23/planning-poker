import { GAMEMODE } from '../enums/game.enum';

export interface playerInfoInterface {
  name: string;
  mode: GAMEMODE;
  selected?: boolean;
  selectedNumber?: number | null;
}
