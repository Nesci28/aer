import { TranslatableTextUtil } from "../app/utils/translatable-text.util";
import { Card } from "../interfaces/card.interface";
import { SupportedLanguage } from "../interfaces/supported-language.enum";
import { Tier } from "../interfaces/tier.enum";

const power = [
  { language: SupportedLanguage.Fr, text: "Pouvoir" },
  { language: SupportedLanguage.En, text: "Power" },
];
const minion = [
  { language: SupportedLanguage.Fr, text: "Serviteur" },
  { language: SupportedLanguage.En, text: "Minion" },
];
const attack = [
  { language: SupportedLanguage.Fr, text: "Attaque" },
  { language: SupportedLanguage.En, text: "Attack" },
];

export const nemesisCardText: Card[] = [
  {
    id: "AgonyField-AE",
    expansion: "AE",
    tier: Tier._1,
    type: power,
    name: TranslatableTextUtil.build("Agony Field", "Champs d'agonie"),
    power: 2,
    effect: TranslatableTextUtil.build(
      '<p><b>To Discard:</b> Destroy a card in hand that costs 2 <span class="aether">&AElig;</span> or more.<br /><br /><b>Power 2:</b> Unleash. Any player discards three cards and then draws one card.</p>',
      '<p><b>Pour Défausser:</b> Détruisez une carte coûtant 2 <span class="aether">&AElig;</span> ou plus.<br /><br /><b>Puissance 2:</b> Déchaîné. Un joueur défausse trois cartes de sa main puis pioche une carte.</p>',
    ),
  },
  {
    id: "BaneSire-AE",
    expansion: "AE",
    tier: Tier._1,
    type: minion,
    name: TranslatableTextUtil.build("Bane Sire", "Seigneur du Fléau"),
    hp: 6,
    effect: TranslatableTextUtil.build(
      "<p><b>Persistent:</b> Unleash.</p>",
      "<p><b>Durable:</b> Déchaîné.</p>",
    ),
  },
  {
    id: "BleedStatic-AE",
    expansion: "AE",
    tier: Tier._1,
    type: power,
    name: TranslatableTextUtil.build("Bleed Static", "Saignement Statique"),
    power: 3,
    effect: TranslatableTextUtil.build(
      "<p><b>Power 3:</b> The player with the most prepped spells suffers 2 damage for each of their prepped spells.</p>",
      "<p><b>Puissance 3:</b> Le joueur ayant le plus grand nombre de sorts préparés subit 2 dégâts par sort préparé.</p>",
    ),
  },

  {
    id: "EyeofNothing-AE",
    expansion: "AE",
    tier: Tier._1,
    type: power,
    name: TranslatableTextUtil.build("Eye of Nothing", "Œil du Néant"),
    power: 2,
    effect: TranslatableTextUtil.build(
      '<p><b>To Discard:</b> Spend 6 <span class="aether">&AElig;</span>.<br /><br /><b>Power 2:</b> Unleash twice.</p>',
      '<p><b>Pour défausser:</b> Dépensez 6 <span class="aether">&AElig;</span>.<br /><br /><b>Puissance 2:</b> Déchaîné, deux fois.</p>',
    ),
  },
  {
    id: "HazeSpewer-AE",
    expansion: "AE",
    tier: Tier._1,
    type: minion,
    name: TranslatableTextUtil.build("Haze Spewer", "Cracheur de Brouillard"),
    hp: 5,
    effect: TranslatableTextUtil.build(
      "<p><b>Persistent:</b> Gravehold suffers damage equal to this minion's current life. Then, this minion suffers 1 damage.</p>",
      "<p><b>Durable:</b> Gravehold subit autant de dégâts que le nombre de points de vie actuel de ce Serviteur. Puis, ce Serviteur subit 1 dégâts.</p>",
    ),
  },
  {
    id: "Skewer-AE",
    expansion: "AE",
    tier: Tier._1,
    type: attack,
    name: TranslatableTextUtil.build("Skewer", "Embrocher"),
    effect: TranslatableTextUtil.build(
      "<p>Unleash. Any player suffers 3 damage and draws a card.</p>",
      "<p>Déchaîné. Un joueur subit 3 dégâts puis pioche une carte.</p>",
    ),
  },
  {
    id: "Slaughter-AE",
    expansion: "AE",
    tier: Tier._1,
    type: attack,
    name: TranslatableTextUtil.build("Slaughter", "Massacre"),
    effect: TranslatableTextUtil.build(
      "<p>Unleash. Gravehold suffers 3 damage.</p>",
      "<p>Déchaîné. Gravehold subit 3 dégâts.</p>",
    ),
  },
  {
    id: "WovenSky-AE",
    expansion: "AE",
    tier: Tier._1,
    type: power,
    name: TranslatableTextUtil.build("Woven Sky", "Ciel Tissé"),
    power: 2,
    effect: TranslatableTextUtil.build(
      "<p><b>To Discard:</b> Discard three cards.<br /><br /><b>Power 2:</b> Unleash. Any player suffers 4 damage.</p>",
      "<p><b>Pour défausser:</b> Défaussez trois cartes de votre main.<br /><br /><b>Puissance 2:</b> Déchaîné. Un joueur subit 4 dégâts.</p>",
    ),
  },
  {
    id: "Awaken-AE",
    expansion: "AE",
    tier: Tier._2,
    type: attack,
    name: TranslatableTextUtil.build("Awaken", "Réveil"),
    effect: TranslatableTextUtil.build(
      '<p>Unleash twice and Gravehold suffers 3 damage.<span class="or">OR</span>Place the most recently discarded minion in the nemesis discard pile back into play.</p>',
      '<p>Déchaîné, deux fois. Puis Gravehold subit 3 dégâts.<span class="or">OU</span>Remettez en jeu le serviteur ayant été défaussé le plus récemment.</p>',
    ),
  },
  {
    id: "Cauterizer-AE",
    expansion: "AE",
    tier: Tier._2,
    type: minion,
    name: TranslatableTextUtil.build("Cauterizer", "Cautériseur"),
    shields: 3,
    hp: 0,
    effect: TranslatableTextUtil.build(
      "<p>When damage is dealt to this minion, reduce that damage to 1.<br /><br /><b>Persistent:</b> Any player suffers damage equal to this minion's current life.</p>",
      "<p>Lorsque ce serviteur subit des dégâts, ils sont réduits à 1.<br /><br /><b>Durable:</b> Un joueur subit autant de dégâts que la vie actuelle de ce serviteur.</p>",
    ),
  },
  {
    id: "Dispel-AE",
    expansion: "AE",
    tier: Tier._2,
    type: attack,
    name: TranslatableTextUtil.build("Dispel", "Dissiper"),
    effect: TranslatableTextUtil.build(
      "<p>Unleash twice. The player with the most prepped spells discards their most expensive prepped spell.</p>",
      "<p>Déchaîné, deux fois. Le joueur ayant le plus grand nombre de sorts préparés défausse son sort préparé le plus cher.</p>",
    ),
  },
  {
    id: "Needlemaw-AE",
    expansion: "AE",
    tier: Tier._2,
    type: minion,
    name: TranslatableTextUtil.build("Needlemaw", "Mâchoire-Acérée"),
    hp: 11,
    effect: TranslatableTextUtil.build(
      "<p><b>Persistent:</b> Gravehold suffers 2 damage.</p>",
      "<p><b>Durable:</b> Gravehold subit 2 dégâts.</p>",
    ),
  },
  {
    id: "LayWaste-AE",
    expansion: "AE",
    tier: Tier._2,
    type: attack,
    name: TranslatableTextUtil.build("Lay Waste", "Dévaster"),
    effect: TranslatableTextUtil.build(
      "<p>Unleash twice. Any player suffers 2 damage.</p>",
      "<p>Déchaîné, deux fois. Un joueur subit 2 dégâts.</p>",
    ),
  },
  {
    id: "PulverizingRay-AE",
    expansion: "AE",
    tier: Tier._2,
    type: power,
    name: TranslatableTextUtil.build("Pulverizing Ray", "Rayon Pulvérisant"),
    power: 1,
    effect: TranslatableTextUtil.build(
      "<p><b>Power 1:</b> Gravehold suffers 18 damage. The players may collectively discard up to 6 gems. For each gem discarded this way, prevent 3 of that damage.</p>",
      "<p><b>Puissance 1:</b> Gravehold subit 3 dégâts sauf si un joueur défausse une gemme de sa main. Répétez ceci 5 fois de plus.</p>",
    ),
  },
  {
    id: "Venomite-AE",
    expansion: "AE",
    tier: Tier._2,
    type: minion,
    name: TranslatableTextUtil.build("Venomite", "Porte-Venin"),
    hp: 9,
    effect: TranslatableTextUtil.build(
      '<p><b>Persistent:</b> The player with the lowest life suffers 2 damage.<span class="or">OR</span>Any player discards a prepped spell that costs 3 <span class="aether">&AElig;</span> or more.</p>',
      '<p><b>Durable:</b> Le joueur ayant le moins de vie subit 2 dégâts.<span class="or">OU</span>Un joueur défausse un sort préparé coûtant 3 <span class="aether">&AElig;</span> ou plus.</p>',
    ),
  },
  {
    id: "DoomAegis-AE",
    expansion: "AE",
    tier: Tier._3,
    type: power,
    name: TranslatableTextUtil.build("Doom Aegis", "Égide de la Ruine"),
    power: 1,
    effect: TranslatableTextUtil.build(
      '<p><b>To Discard:</b> Spend 7 <span class="aether">&AElig;</span>.<br /><br /><b>Power 1:</b> The player with the most charges suffers 4 damage and loses all of their charges.</p>',
      '<p><b>Pour défausser:</b> Dépensez 7 <span class="aether">&AElig;</span>.<br /><br /><b>Puissance 1:</b> Le joueur ayant le plus grand nombre de charges subit 4 dégâts et perd toutes ses charges.</p>',
    ),
  },
  {
    id: "GatherDarkness-AE",
    expansion: "AE",
    tier: Tier._3,
    type: attack,
    name: TranslatableTextUtil.build(
      "Gather Darkness",
      "Rassembler les Ombres",
    ),
    effect: TranslatableTextUtil.build(
      "<p>Any player places their discard pile on top of their deck, shuffles it, and then destroys the top four cards of their deck. Then, Unleash twice.</p>",
      "<p>Un joueur place sa défausse sur sa pioche, mélange le tout, puis détruit les quatre premières cartes de son paquet. Puis, Déchaîné, deux fois.</p>",
    ),
  },
  {
    id: "JaggedOne-AE",
    expansion: "AE",
    tier: Tier._3,
    type: minion,
    name: TranslatableTextUtil.build("Jagged One", "Le Déchiqueté"),
    hp: 14,
    effect: TranslatableTextUtil.build(
      "<p><b>Persistent:</b> Unleash twice.</p>",
      "<p><b>Durable:</b> Déchaîné, deux fois.</p>",
    ),
  },
  {
    id: "Obliterate-AE",
    expansion: "AE",
    tier: Tier._3,
    type: attack,
    name: TranslatableTextUtil.build("Obliterate", "Anéantir"),
    effect: TranslatableTextUtil.build(
      "<p>Unleash twice. The player with the most opened breaches destroys four cards in hand or suffers 4 damage.</p>",
      "<p>Déchaîné, deux fois. Le joueur ayant le plus grand nombre de brèches ouvertes doit détruire quatre cartes de sa main ou subit 4 dégâts.</p>",
    ),
  },
  {
    id: "RealityRupture-AE",
    expansion: "AE",
    tier: Tier._3,
    type: power,
    name: TranslatableTextUtil.build(
      "Reality Rupture",
      "Rupture de la Réalité",
    ),
    power: 1,
    effect: TranslatableTextUtil.build(
      '<p><b>To Discard:</b> Destroy two prepped spells that each cost 3 <span class="aether">&AElig;</span> or more.<br /><br /><b>Power 1:</b> Unleash three times.</p>',
      '<p><b>Pour défausser:</b> Détruisez deux sorts préparés coûtant chacun 3 <span class="aether">&AElig;</span> ou plus.<br /><br /><b>Puissance 1:</b> Déchaîné, trois fois.</p>',
    ),
  },
  {
    id: "Sunder-AE",
    expansion: "AE",
    tier: Tier._3,
    type: attack,
    name: TranslatableTextUtil.build("Sunder", "Fracture"),
    effect: TranslatableTextUtil.build(
      '<p>Gravehold suffers 4 damage and the player with the lowest life suffers 4 damage.<span class="or">OR</span>Shuffle all of the nemesis turn order cards into the turn order deck.</p>',
      '<p>Gravehold subit 4 dégâts et le joueur ayant le moins de vie subit 4 dégâts.<span class="or">OU</span>Mélangez toutes les cartes Ordre du tour de la némésis dans le paquet d\'ordre du tour.</p>',
    ),
  },
  {
    id: "Topple-AE",
    expansion: "AE",
    tier: Tier._3,
    type: attack,
    name: TranslatableTextUtil.build("Topple", "Renverser"),
    effect: TranslatableTextUtil.build(
      "<p>Unleash twice. Gravehold suffers 4 damage.</p>",
      "<p>Déchaîné, deux fois. Gravehold subit 4 dégâts.</p>",
    ),
  },
];
