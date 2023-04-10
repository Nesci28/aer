import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { shuffle } from "lodash";

import { nemesisText } from "../../../i18n/nemesis.i18n";
import { nemesisCardText } from "../../../i18n/nemesis-card.i18n";
import { Card } from "../../../interfaces/card.interface";
import { Nemesis } from "../../../interfaces/nemesis.interface";
import { AppService } from "../../app.service";
import { LocalizePipe } from "../../pipes/localize.pipe";

@UntilDestroy()
@Component({
  selector: "app-nemesis",
  templateUrl: "./nemesis.page.html",
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, LocalizePipe],
})
export class NemesisPage implements OnInit {
  public nbrOfPlayer = new FormControl(2, Validators.required);

  public nemesis: Nemesis | undefined;

  public nemesisCards: Card[] = [];

  constructor(private readonly appService: AppService) {}

  public ngOnInit(): void {
    this.appService.nbrOfPlayers$.pipe(untilDestroyed(this)).subscribe((x) => {
      this.nbrOfPlayer.setValue(x);
    });
  }

  public generate(): void {
    const nemesis = shuffle(nemesisText)[0];
    const nemesisBasicCardTier1 = shuffle(
      nemesisCardText.filter((x) => {
        return x.tier === 1;
      }),
    ).splice(0, 3);
    const nemesisBasicCardTier2 = shuffle(
      nemesisCardText.filter((x) => {
        return x.tier === 2;
      }),
    ).splice(0, 5);
    const nemesisBasicCardTier3 = shuffle(
      nemesisCardText.filter((x) => {
        return x.tier === 3;
      }),
    ).splice(0, 7);
    this.nemesis = nemesis;
    this.nemesisCards = [
      ...nemesisBasicCardTier1,
      ...nemesisBasicCardTier2,
      ...nemesisBasicCardTier3,
    ];
  }
}
