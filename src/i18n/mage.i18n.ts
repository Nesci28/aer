import { TranslatableTextUtil } from "../app/utils/translatable-text.util";
import { Mage } from "../interfaces/mage.interface";

export const mageText: Mage[] = [
  {
    expansion: "AE",
    name: TranslatableTextUtil.build("Adelheim", "Adelheim"),
    id: "Adelheim",
    mageTitle: TranslatableTextUtil.build(
      "Breach Mage Weaponsmith",
      "Armurier",
    ),
    ability: TranslatableTextUtil.build(
      `Aethereal Ward<br />
      Activate during the nemesis draw phase:<br />
      When a nemesis attack or power card is drawn but before it is resolved,<br />
      you may discard it. It has no effect.<br />
      (The nemesis does not draw a replacement card)`,
      `Gardien étherien<br />
      S'active durant la phase de pioche de la némésis :<br />
      Après qu'une carte Attaque ou Pouvoir a été piochée, mais avant qu'elle soit résolue, vous pouvez la défausser sans appliquer son effet.<br />
      La némésis ne pioche pas de nouvelle carte à la place`,
    ),
  },
  {
    expansion: "AE",
    name: TranslatableTextUtil.build("Brama", "Brama"),
    id: "Brama",
    mageTitle: TranslatableTextUtil.build("Breach Mage Elder", "Ancienne"),
    ability: TranslatableTextUtil.build(
      `Brink Siphon<br />
      Activate during your main phase:<br />
      Any player gains 4 life.`,
      `Siphon de la bordure<br />
      S'active durant votre phase principale :<br />
      Un joueur gagne 4 Vie.`,
    ),
  },
  {
    expansion: "AE",
    name: TranslatableTextUtil.build("Jian", "Jian"),
    id: "Jian",
    mageTitle: TranslatableTextUtil.build("Breach Mage Orphan", "Orpheline"),
    ability: TranslatableTextUtil.build(
      `Black Mirror<br />
      Activate during your main phase:<br />
      Cast any player's prepped spell without discarding it.<br />
      Then cast that prepped spell again.<br />
      (Discard it afterward.)`,
      `Miroir noir<br />
      S'active durant votre phase principale :<br />
      Lancez le sort préparer d'un joueur sans le défausser. Puis lancer ce sort à nouveau.<br />
      Défaussez-le ensuite.`,
    ),
  },
  {
    expansion: "AE",
    name: TranslatableTextUtil.build("Kadir", "Kadir"),
    id: "Kadir",
    mageTitle: TranslatableTextUtil.build("Breach Mage Delver", "Chercheuse"),
    ability: TranslatableTextUtil.build(
      `Otherworldly Gate<br />
      Activate during any player's main phase:<br />
      That player may return up to three spells in their discard pile<br />
      to their hand. That player may prep up to two spells to each<br />
      of their opened breaches this turn.`,
      `Porte vers l'autre-monde<br />
      S'active durant la phase principale d'un joueur :<br />
      Ce joueur peut reprendre en main jusqu'à trois sorts de sa défausse. Durant ce tour, ce joueur peut préparer jusqu'à deux sorts sur chacune de ses brèches ouvertes.`,
    ),
  },
  {
    expansion: "AE",
    name: TranslatableTextUtil.build("Lash", "Lash"),
    id: "Lash",
    mageTitle: TranslatableTextUtil.build("Breach Mage Scout", "Éclaireur"),
    ability: TranslatableTextUtil.build(
      `Quicken Thought<br />
      Activate during any player's main phase:<br />
      Shuffle any player's turn order card into the turn order deck.<br />
      That player suffers 1 damage. (You may not choose the<br />
      wildcard turn order card.)`,
      `Accélération mentale<br />
      S'active durant la phase principale d'un joueur :<br />
      Mélangez la carte Ordre du tour d'un joueur dans le paquet d'ordre du tour. Ce joueur subit 1 dégât.<br />
      Vous ne pouvez pas choisir la carte Ordre du jour Joker.`,
    ),
  },
  {
    expansion: "AE",
    name: TranslatableTextUtil.build("Mist", "Mist"),
    id: "Mist",
    mageTitle: TranslatableTextUtil.build(
      "Dagger Captain",
      "Capitaine de la dague",
    ),
    ability: TranslatableTextUtil.build(
      `Divine Augury<br />
      Activate during your main phase:<br />
      Any ally draws 4 cards.`,
      `Prédiciton divine<br />
      S'active durant votre phase principale :<br />
      Un allié pioche quatre cartes.`,
    ),
  },
  {
    expansion: "AE",
    name: TranslatableTextUtil.build("Phaedraxa", "Phaedraxa"),
    id: "Phaedraxa",
    mageTitle: TranslatableTextUtil.build("Breach Mage Seer", "Voyante"),
    ability: TranslatableTextUtil.build(
      `Auspex Rune<br />
      Activate immediately after a turn order card is drawn:<br />
      Prevent any damage that the players or Gravehold would suffer during that turn.`,
      `Rune des oracles<br />
      S'active au moment où une carte Ordre du tour est révélée :<br />
      Tous les dégâts que les joueurs ou Gravehold devraient subir ce tour-ci sont annulés.`,
    ),
  },
  {
    expansion: "AE",
    name: TranslatableTextUtil.build("Xaxos", "Xaxos"),
    id: "Xaxos",
    mageTitle: TranslatableTextUtil.build("Breach Mage Adept", "Adepte"),
    ability: TranslatableTextUtil.build(
      `Metaphysical Link<br />
      Activate during any player's main phase:<br />
      Allies collectively gain 4 charges. Reveal the turn order deck and return<br />
      the revealed cards in any order.`,
      `Lien métaphysique<br />
      S'active durant la phase principale d'un joueur :<br />
      Les alliés reçoivent collectivement 4 charges. Révélez puis replacez les cartes de la pioche d'Ordre du tour dans l'ordre de votre choix.`,
    ),
  },
];
