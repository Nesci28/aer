import { TranslatableTextUtil } from "../app/utils/translatable-text.util";
import { Card } from "../interfaces/card.interface";
import { SupportedLanguage } from "../interfaces/supported-language.enum";

const gem = [
  { language: SupportedLanguage.Fr, text: "Gemme" },
  { language: SupportedLanguage.En, text: "Gem" },
];

export const mageCardGemText: Card[] = [
  {
    type: gem,
    expansion: "AE",
    name: TranslatableTextUtil.build("Diamond Cluster", "Agrégat de diamants"),
    id: "DiamondCluster",
    cost: 4,
    effect: TranslatableTextUtil.build(
      'Gain 2 <span class="aether">&AElig;</span>.<br/>If this is the second time you have played Diamond Cluster this turn gain an additional 2 <span class="aether">&AElig;</span>.',
      'Gagnez 2 <span class="aether">&AElig;</span>.<br/>Si c\'est le second Agrégat de diamants que vous jouez ce tour, gagnez 2 <span class="aether">&AElig;</span> de plus.',
    ),
  },
  {
    type: gem,
    expansion: "AE",
    name: TranslatableTextUtil.build("Searing Ruby", "Rubis fulgurant"),
    id: "SearingRuby",
    cost: 4,
    effect: TranslatableTextUtil.build(
      'Gain 2 <span class="aether">&AElig;</span>.<br/>Gain an additional 1 <span class="aether">&AElig;</span> that can only be used to gain a spell.',
      'Gagnez 2 <span class="aether">&AElig;</span>.<br/>Gagnez 1 <span class="aether">&AElig;</span> supplémentaire qui ne peut être utilisé que pour acquérir un sort.',
    ),
  },
  {
    type: gem,
    expansion: "AE",
    name: TranslatableTextUtil.build("Burning Opal", "Opale brûlante"),
    id: "BurningOpal",
    cost: 5,
    effect: TranslatableTextUtil.build(
      'Gain 3 <span class="aether">&AElig;</span>.<br/>You may discard a card in hand. If you do, any ally draws a card.',
      'Gagnez 3 <span class="aether">&AElig;</span>.<br/>Vous pouvez défausser une carte de votre main pour qu\'un allié pioche une carte.',
    ),
  },
  {
    type: gem,
    expansion: "AE",
    name: TranslatableTextUtil.build("Clouded Sapphire", "Saphir nuageux"),
    id: "CloudedSapphire",
    cost: 6,
    effect: TranslatableTextUtil.build(
      'Gain 3 <span class="aether">&AElig;</span>.<br/>If this is the first time you have played Clouded Sapphire this turn, any ally gains 1 charge.',
      "Gagnez 3 <span class=\"aether\">&AElig;</span>.<br/>S'il s'agit du premier Saphir nuageux que vous jouez ce tour, un allié gagne 1 charge.",
    ),
  },
  {
    type: gem,
    expansion: "AE",
    name: TranslatableTextUtil.build("Jade", "Jade"),
    id: "Jade",
    cost: 2,
    effect: TranslatableTextUtil.build(
      'Gain 2 <span class="aether">&AElig;</span>.',
      'Gagnez 2 <span class="aether">&AElig;</span>.',
    ),
  },
  {
    type: gem,
    expansion: "AE",
    name: TranslatableTextUtil.build("Vriswood Amber", "Ambre de V'risbois"),
    id: "VriswoodAmber",
    cost: 3,
    effect: TranslatableTextUtil.build(
      'When gain this, you may place it on top of your deck.<br/>Gain 2 <span class="aether">&AElig;</span>.',
      'Lorsque vous acquérez cette carte, vous pouvez la placer au-dessus de votre pioche.<br/>Gagnez 2 <span class="aether">&AElig;</span>.',
    ),
  },
  {
    type: gem,
    expansion: "AE",
    name: TranslatableTextUtil.build("Sifters Pearl", "Perle filtrante"),
    id: "SiftersPearl",
    cost: 3,
    effect: TranslatableTextUtil.build(
      'Gain 2 <span class="aether">&AElig;</span>.<br/>Each player reveals the top card of their deck and either discards it or returns it to the top of their deck.',
      'Gagnez 2 <span class="aether">&AElig;</span>.<br/>Chaque joueur révèle la première carte de sa pioche et peut soit la défausser soit la remettre sur le dessus de sa pioche.',
    ),
  },
];
