import { Creature } from "./creature.interface";
import { TranslatableText } from "./translatable-text.interface";

export interface Mage extends Creature {
  mageTitle: TranslatableText[];
  ability: TranslatableText[];
}
