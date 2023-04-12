import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { shuffle } from "lodash";

import { mageCardGemText } from "../../../i18n/mage-card-gem.i18n";
import { mageCardRelicText } from "../../../i18n/mage-card-relic.i18n";
import { mageCardSpellText } from "../../../i18n/mage-card-spell.i18n";
import { Card } from "../../../interfaces/card.interface";
import { BasePage } from "../../base/base.page";
import { LocalizePipe } from "../../pipes/localize.pipe";
import { marketPageText } from "./market.i18n";

@Component({
  selector: "app-market",
  templateUrl: "./market.page.html",
  standalone: true,
  imports: [IonicModule, CommonModule, LocalizePipe, ReactiveFormsModule],
})
export class MarketPage extends BasePage {
  public marketPageText = marketPageText;

  public cards: (Card & { background: string })[] = [];

  public generate(): void {
    const gemCards = shuffle(mageCardGemText)
      .splice(0, 3)
      .map((x) => {
        return {
          ...x,
          background: "bg-violet-200",
        };
      })
      .sort((a, b) => {
        return a.cost! - b.cost!;
      });
    const spellCards = shuffle(mageCardSpellText)
      .splice(0, 4)
      .map((x) => {
        return {
          ...x,
          background: "bg-blue-200",
        };
      })
      .sort((a, b) => {
        return a.cost! - b.cost!;
      });
    const relicCards = shuffle(mageCardRelicText)
      .splice(0, 2)
      .map((x) => {
        return {
          ...x,
          background: "bg-yellow-200",
        };
      })
      .sort((a, b) => {
        return a.cost! - b.cost!;
      });
    this.cards = [...gemCards, ...spellCards, ...relicCards];
  }
}
