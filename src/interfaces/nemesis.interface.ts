import { Creature } from "./creature.interface";
import { ExpeditionRating } from "./expedition-rating.enum";
import { TranslatableText } from "./translatable-text.interface";

export interface Nemesis extends Creature {
  health: number | "*";
  additionalInfo: TranslatableText[];
  difficulty: number;
  expeditionRating: ExpeditionRating;
}
