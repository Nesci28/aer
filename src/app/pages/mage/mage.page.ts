import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { UntilDestroy } from "@ngneat/until-destroy";
import { shuffle } from "lodash";

import { mageText } from "../../../i18n/mage.i18n";
import { Mage } from "../../../interfaces/mage.interface";
import { BasePage } from "../../base/base.page";
import { LocalizePipe } from "../../pipes/localize.pipe";
import { magePageText } from "./mage.i18n";

@UntilDestroy()
@Component({
  selector: "app-mage",
  templateUrl: "./mage.page.html",
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, LocalizePipe],
})
export class MagePage extends BasePage implements OnInit {
  public magePageText = magePageText;

  public mages: Mage[] = [];

  public generate(): void {
    const mages = shuffle(mageText).splice(0, this.form.value.nbrOfPlayers!);
    this.mages = mages;
  }
}
