import { TranslatableTextUtil } from "../app/utils/translatable-text.util";
import { Card } from "../interfaces/card.interface";
import { SupportedLanguage } from "../interfaces/supported-language.enum";

const relic = [
  { language: SupportedLanguage.Fr, text: "Relique" },
  { language: SupportedLanguage.En, text: "Relic" },
];

export const mageCardRelicText: Card[] = [
  {
    type: relic,
    expansion: "AE",
    name: TranslatableTextUtil.build("Unstable Prism", "Prisme instable"),
    id: "UnstablePrism",
    cost: 3,
    effect: TranslatableTextUtil.build(
      'Play a gem in hand twice and destroy it.<span class="or">OR</span>Gain 2 <span class="aether">&AElig;</span>.',
      'Appliquez deux fois l\'effet d\'une gemme de votre main, puis détruisez-la.<span class="or">OU</span>Gagnez 2 <span class="aether">&AElig;</span>.',
    ),
  },
  {
    type: relic,
    expansion: "AE",
    name: TranslatableTextUtil.build("Mages Talisman", "Talisman de mage"),
    id: "MagesTalisman",
    cost: 5,
    effect: TranslatableTextUtil.build(
      "Gain 1 charge.<br/>Any ally gains 1 charge.",
      "Gagnez 1 charge.<br/>Un allié gagne 1 charge.",
    ),
  },
  {
    type: relic,
    expansion: "AE",
    name: TranslatableTextUtil.build("Flexing Dagger", "Dague fléchissante"),
    id: "FlexingDagger",
    cost: 2,
    effect: TranslatableTextUtil.build(
      'The next time you focus or open a breach this turn, it costs 3 <span class="aether">&AElig;</span> less.<span class="or">OR</span>Destroy this. Deal 1 damage.',
      'La prochaine brèche que vous stabilisez ou que vous ouvrez lors de ce tour vous coûte 3 <span class="aether">&AElig;</span> de moins.<span class="or">OU</span>Détruisez cette carte. Infligez 1 dégât.',
    ),
  },
  {
    type: relic,
    expansion: "AE",
    name: TranslatableTextUtil.build("Bottled Vortex", "Vortex en bouteille"),
    id: "BottledVortex",
    cost: 3,
    effect: TranslatableTextUtil.build(
      "Destroy this.<br/>Destroy up to two cards in your hand or discard pile.<br/>Draw a card.",
      "Détruisez cette carte.<br/>Détruisez jusqu'à deux cartes de votre ou de votre défausse.<br/>Piochez une carte.",
    ),
  },
  {
    type: relic,
    expansion: "AE",
    name: TranslatableTextUtil.build("Blasting Staff", "Bâton d'explosion"),
    id: "BlastingStaff",
    cost: 4,
    effect: TranslatableTextUtil.build(
      "You may cast a prepped spell that you prepped this turn. If you do, that spell deals 2 additional damage.",
      "Vous pouvez lancer un sort que vous avez préparé ce tour-ci et infliger 2 dégâts supplémentaires avec ce sort.",
    ),
  },
  {
    type: relic,
    expansion: "AE",
    name: TranslatableTextUtil.build("Focusing Orb", "Orbre de stabilisation"),
    id: "FocusingOrb",
    cost: 4,
    effect: TranslatableTextUtil.build(
      'Focus any player\'s breach.<span class="or">OR</span>Destroy this. Gravehold gains 3 life.',
      'Stabilisez la brèche d\'un joueur.<span class="or">OU</span>Détruisez cette carte pour faire gagner 3 points de vie à Gravehold.',
    ),
  },
];
