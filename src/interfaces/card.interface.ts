import { Tier } from "./tier.enum";
import { TranslatableText } from "./translatable-text.interface";

export type Card = {
  id: string;
  name: TranslatableText[];
  expansion: string;
  tier?: Tier;
  effect: TranslatableText[];
  type: TranslatableText[];
  hp?: number;
  power?: number;
  shields?: number;
  cost?: number;
};
