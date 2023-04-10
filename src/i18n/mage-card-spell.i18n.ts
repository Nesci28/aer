import { TranslatableTextUtil } from "../app/utils/translatable-text.util";
import { Card } from "../interfaces/card.interface";
import { SupportedLanguage } from "../interfaces/supported-language.enum";

const spell = [
  { language: SupportedLanguage.Fr, text: "Sort" },
  { language: SupportedLanguage.En, text: "Spell" },
];

export const mageCardSpellText: Card[] = [
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Chaos Arc", "Arc chaotique"),
    id: "ChaosArc",
    cost: 6,
    effect: TranslatableTextUtil.build(
      "Cast: Deal 3 damage.<br/>Deal 2 additional damage for each prepped spell in an adjacent breach.",
      "Lancer : Infligez 3 dégâts.<br/>Infligez 2 dégâts supplémentaires par sort préparé sur une brèche adjacente.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("", "Mise à feu"),
    id: "Ignite",
    cost: 4,
    effect: TranslatableTextUtil.build(
      "Cast: Deal 2 damage.<br/>Any ally gains 1 charge.",
      "Lancer : Infligez 2 dégâts.<br/>Un allié gagne 1 charge.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Essence Theft", "Vol d'essence"),
    id: "EssenceTheft",
    cost: 5,
    effect: TranslatableTextUtil.build(
      "Cast: Deal 3 damage.<br/>You may discard a card in hand. If you do, any player gains 1 life.",
      "Lancer : Infligez 3 dégâts.<br/>Vous pouvez défausser une carte de votre main. Si vous le faites, un joueur gagne 1 point de vie.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Feral Lightning", "Éclair enragé"),
    id: "FeralLightning",
    cost: 5,
    effect: TranslatableTextUtil.build(
      "This spell may be prepped to a closed breach without focusing it.<br/>Cast: Deal 3 damage.",
      "Ce sort peut être préparé sur une brèche fermée sans qu'elle doive être stabilisée.<br/>Lancer : Infligez 3 dégâts.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Planar Insight", "Aperçu planaire"),
    id: "PlanarInsight",
    cost: 6,
    effect: TranslatableTextUtil.build(
      "Cast: Deal 2 damage.<br/>Deal 1 addtional damage for each of your opened breaches.",
      "Lancer : Infligez 2 dégâts.<br/>Infligez 1 dégât supplémentaire pour chacune de vos brèches ouvertes.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Spectral Echo", "Écho spectral"),
    id: "SpectralEcho",
    cost: 3,
    effect: TranslatableTextUtil.build(
      "Cast: Deal 2 damage.<br/>You may destroy a card in hand.",
      "Lancer : Infligez 2 dégâts.<br/>Vous pouvez détruire une carte de votre main.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Consuming Void", "Vide dévorant"),
    id: "ConsumingVoid",
    cost: 7,
    effect: TranslatableTextUtil.build(
      "Cast: Destroy up to two cards in hand.<br/>Deal 3 damage for each card destroyed in this way.",
      "Lancer : Détruisez jusqu'à deux cartes de votre main. Infligez 3 dégâts par carte détruite de cette manière.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Lava Tendril", "Tentacule de lave"),
    id: "LavaTendril",
    cost: 4,
    effect: TranslatableTextUtil.build(
      "While prepped, at the end of your casting phase deal 1 damage.<br/>Cast: Deal 3 damage.",
      "Lorsque préparé, à la fin de votre phase d'incantation, infligez 1 dégât.<br/>Lancer : Infligez 3 dégâts.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Arcane Nexus", "Nexus des arcanes"),
    id: "ArcaneNexus",
    cost: 7,
    effect: TranslatableTextUtil.build(
      "While prepped, once per turn during your main phase you may return a gem you played this turn to your hand.<br/>Cast: Deal 4 damage.",
      "Lorsque préparé, une fois par tour durant votre phase principale, vous pouvez reprendre une gemme jouée ce tour-ci en main.<br/>Lancer : Infligez 4 dégâts.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Dark Fire", "Feu obscur"),
    id: "DarkFire",
    cost: 5,
    effect: TranslatableTextUtil.build(
      "Cast: Discard up to two cards in hand.<br/>Deal 3 damage for each card discarded this way.",
      "Lancer : Défaussez jusqu'à deux cartes de votre main.<br/>Infligez 3 dégâts par carte que vous avez défaussée de cette manière.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Phoenix Flame", "Flamme du phénix"),
    id: "PhoenixFlame",
    cost: 3,
    effect: TranslatableTextUtil.build(
      "Cast: Deal 2 damage.<br/>You may lose 1 charge to deal 2 additional damage.",
      "Lancer : Infligez 2 dégâts.<br/>Vous pouvez perdre 1 charge pour infliger 2 dégâts supplémentaires.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Amplify Vision", "Vision amplifiée"),
    id: "AmplifyVision",
    cost: 4,
    effect: TranslatableTextUtil.build(
      "Cast: Focus your closed breach with the lowest focus cost.<br/>Deal 2 damage.<br/>If all of your breaches are opened, deal 1 additional damage.",
      "Lancer : Stabilisez votre brèche ayant le coût le plus faible.<br/>Infligez 2 dégâts. Si toutes vos brèches sont ouvertes, infligez 1 dégat de plus.",
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Wildfire Whip", "Fouet ardent"),
    id: "WildfireWhip",
    cost: 6,
    effect: TranslatableTextUtil.build(
      'While prepped, during your main phase you may spend 2 <span class="aether">&AElig;</span> to cast any player\'s prepped spell.<br/>Cast: Deal 4 damage.',
      'Lorsque prépare, vous pouvez dépenser 2 <span class="aether">&AElig;</span> durant votre phase principale, pour lancer un sort préparé chez n\'importe quel joueur.<br/>Lancer : Infligez 4 dégâts.',
    ),
  },
  {
    type: spell,
    expansion: "AE",
    name: TranslatableTextUtil.build("Oblivion Swell", "Vague d'oubli"),
    id: "OblivionSwell",
    cost: 5,
    effect: TranslatableTextUtil.build(
      'While prepped, once per turn during your main phase you may gain 1 <span class="aether">&AElig;</span>.<br/>Cast: Deal 2 damage.<br/>You may discard a gem. If you do, deal additional damage equal to its cost.',
      'Lorsque prépare, une fois par tour, durant votre phase principale, gagnez 1 <span class="aether">&AElig;</span>.<br/>Lancer : Infligez 2 dégâts. Vous pouvez défausser une gemme pour infliger autant de dégâts supplémentaires que son coût.',
    ),
  },
];
