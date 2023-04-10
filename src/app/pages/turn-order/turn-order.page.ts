import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { IonicModule, ModalController } from "@ionic/angular";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { cloneDeep, shuffle } from "lodash";

import { AppService } from "../../app.service";

@UntilDestroy()
@Component({
  selector: "app-turn-order",
  templateUrl: "./turn-order.page.html",
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class TurnOrderPage implements OnInit {
  public nbrOfPlayer = new FormControl(2, Validators.required);

  public showNbrOfPlayers = true;

  public histories: { label: string }[] = [];

  private originalTurns: { label: string }[] = [
    { label: "1" },
    { label: "2" },
    { label: "nemesis" },
    { label: "nemesis" },
  ];

  private currentTurns: { label: string }[] = [];

  constructor(
    private readonly appService: AppService,
    private readonly modalCtrl: ModalController,
  ) {}

  public ngOnInit(): void {
    this.appService.nbrOfPlayers$.pipe(untilDestroyed(this)).subscribe((x) => {
      this.nbrOfPlayer.setValue(x);
    });
  }

  public generate(): void {
    this.showNbrOfPlayers = false;

    if (this.originalTurns.length === 4) {
      const nbrOfPlayers = this.nbrOfPlayer.value!;
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
    this.showNbrOfPlayers = true;
    this.histories.length = 0;
    this.originalTurns = [
      { label: "1" },
      { label: "2" },
      { label: "nemesis" },
      { label: "nemesis" },
    ];

    this.modalCtrl.dismiss();
  }
}
