import { Creature } from "./creature.interface";
import { ExpeditionRating } from "./expedition-rating.enum";

export interface Nemesis extends Creature {
  health: number | "*";
  additionalInfo: string;
  difficulty: number;
  expeditionRating: ExpeditionRating;
}
