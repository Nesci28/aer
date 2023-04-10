import { TranslatableTextUtil } from "../app/utils/translatable-text.util";
import { Nemesis } from "../interfaces/nemesis.interface";

export const nemesisText: Nemesis[] = [
  {
    expansion: "AE",
    name: TranslatableTextUtil.build("Carapace Queen", "Reine Carapace"),
    id: "CarapaceQueen",
    health: 60,
    difficulty: 3,
    expeditionRating: 1,
    additionalInfo: TranslatableTextUtil.build("", ""),
  },
  {
    expansion: "AE",
    name: TranslatableTextUtil.build("Crooked Mask", "Masque Tordu"),
    id: "CrookedMask",
    health: 70,
    difficulty: 5,
    expeditionRating: 2,
    additionalInfo: TranslatableTextUtil.build("", ""),
  },
  {
    expansion: "AE",
    name: TranslatableTextUtil.build(
      "Prince Of Gluttons",
      "Prince des Gloutons",
    ),
    id: "PrinceOfGluttons",
    health: 70,
    difficulty: 5,
    expeditionRating: 2,
    additionalInfo: TranslatableTextUtil.build("", ""),
  },
  {
    expansion: "AE",
    name: TranslatableTextUtil.build("Rageborne", "Rage Incarnée"),
    id: "Rageborne",
    health: 70,
    difficulty: 2,
    expeditionRating: 1,
    additionalInfo: TranslatableTextUtil.build("", ""),
  },
];
