import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { shuffle } from "lodash";

import { mageCardGemText } from "../../../i18n/mage-card-gem.i18n";
import { mageCardRelicText } from "../../../i18n/mage-card-relic.i18n";
import { mageCardSpellText } from "../../../i18n/mage-card-spell.i18n";
import { Card } from "../../../interfaces/card.interface";
import { LocalizePipe } from "../../pipes/localize.pipe";

@Component({
  selector: "app-market",
  templateUrl: "./market.page.html",
  standalone: true,
  imports: [IonicModule, CommonModule, LocalizePipe],
})
export class MarketPage {
  public cards: (Card & { background: string })[] = [];

  public generate(): void {
    const gemCards = shuffle(mageCardGemText)
      .splice(0, 3)
      .map((x) => {
        return {
          ...x,
          background: "bg-violet-200",
        };
      });
    const spellCards = shuffle(mageCardSpellText)
      .splice(0, 3)
      .map((x) => {
        return {
          ...x,
          background: "bg-blue-200",
        };
      });
    const relicCards = shuffle(mageCardRelicText)
      .splice(0, 3)
      .map((x) => {
        return {
          ...x,
          background: "bg-yellow-200",
        };
      });
    this.cards = [...gemCards, ...spellCards, ...relicCards];
  }
}
