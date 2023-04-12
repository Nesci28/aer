import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  IonicModule,
  ItemReorderEventDetail,
  ModalController,
} from "@ionic/angular";
import { UntilDestroy } from "@ngneat/until-destroy";
import { cloneDeep, shuffle } from "lodash";

import { AppService } from "../../app.service";
import { BasePage } from "../../base/base.page";
import { IonCLickDirective } from "../../directives/click.directive";
import { FreezePipe } from "../../pipes/freeze.pipe";
import { LocalizePipe } from "../../pipes/localize.pipe";
import { turnOrderPageText } from "./turn-order.i18n";

@UntilDestroy()
@Component({
  selector: "app-turn-order",
  templateUrl: "./turn-order.page.html",
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    LocalizePipe,
    IonCLickDirective,
    FreezePipe,
  ],
})
export class TurnOrderPage extends BasePage {
  public turnOrderPageText = turnOrderPageText;

  public isStarted = false;

  public histories: { label: string }[] = [];

  public isNextCardShowed = false;

  public isDeckShowed = false;

  public currentTurns: { label: string }[] = [];

  public reverseCurrentTurns: { label: string }[] = [];

  private originalTurns: { label: string }[] = [
    { label: "1" },
    { label: "2" },
    { label: "nemesis" },
    { label: "nemesis" },
  ];

  constructor(
    appService: AppService,
    private readonly modalCtrl: ModalController,
  ) {
    super(appService);
  }

  public generate(): void {
    this.isStarted = true;

    if (this.originalTurns.length === 4) {
      const nbrOfPlayers = this.form.value.nbrOfPlayers!;
      if (nbrOfPlayers === 2) {
        this.originalTurns.push({ label: "1" }, { label: "2" });
      }
      if (nbrOfPlayers === 3) {
        this.originalTurns.push({ label: "3" }, { label: "wild" });
      }
      if (nbrOfPlayers === 4) {
        this.originalTurns.push({ label: "3" }, { label: "4" });
      }
    }

    if (!this.currentTurns.length) {
      const currentTurns = shuffle(cloneDeep(this.originalTurns));
      this.currentTurns = currentTurns;
    }

    const currentTurn = this.currentTurns.pop()!;
    this.histories.unshift(cloneDeep(currentTurn));
  }

  public reset(): void {
    this.isStarted = true;
    this.histories.length = 0;
    this.originalTurns = [
      { label: "1" },
      { label: "2" },
      { label: "nemesis" },
      { label: "nemesis" },
    ];

    this.modalCtrl.dismiss();
  }

  public checkNextCard(): void {
    this.isDeckShowed = false;
    this.isNextCardShowed = true;
  }

  public reorderDeck(): void {
    this.reverseCurrentTurns = cloneDeep(this.currentTurns).reverse();
    this.isNextCardShowed = false;
    this.isDeckShowed = true;
  }

  public resetVariables(): void {
    this.currentTurns = cloneDeep(this.reverseCurrentTurns).reverse();
    this.isNextCardShowed = false;
    this.isDeckShowed = false;
  }

  public handleReorder(evt: CustomEvent<ItemReorderEventDetail>): void {
    const { from, to } = evt.detail;

    const fromElement = this.reverseCurrentTurns.splice(from, 1)[0];
    this.reverseCurrentTurns.splice(to, 0, fromElement);

    evt.detail.complete();
  }
}
