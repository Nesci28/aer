import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { shuffle } from "lodash";

import { mageText } from "../../../i18n/mage.i18n";
import { Mage } from "../../../interfaces/mage.interface";
import { AppService } from "../../app.service";
import { LocalizePipe } from "../../pipes/localize.pipe";

@UntilDestroy()
@Component({
  selector: "app-mage",
  templateUrl: "./mage.page.html",
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, LocalizePipe],
})
export class MagePage implements OnInit {
  public nbrOfPlayer = new FormControl(2, Validators.required);

  public mages: Mage[] = [];

  constructor(private readonly appService: AppService) {}

  public ngOnInit(): void {
    this.appService.nbrOfPlayers$.pipe(untilDestroyed(this)).subscribe((x) => {
      this.nbrOfPlayer.setValue(x);
    });
  }

  public generate(): void {
    const mages = shuffle(mageText).splice(0, this.nbrOfPlayer.value!);
    this.mages = mages;
  }
}
