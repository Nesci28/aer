import { TranslatableText } from "./translatable-text.interface";

export interface Creature {
  expansion: string;
  name: TranslatableText[];
  id: string;
}
