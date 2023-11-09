export enum GAMEMODE {
  JUGADOR = 'jugador',
  ESPECTADOR = 'espactador',
  NONE = '',
}

export interface Player {
  name: string;
  mode: GAMEMODE;
}
