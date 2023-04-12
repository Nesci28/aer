import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { SupportedLanguage } from "../../interfaces/supported-language.enum";
import { AppService } from "../app.service";
import { LocalizePipe } from "../pipes/localize.pipe";

@UntilDestroy()
@Component({
  selector: "app-base",
  template: "",
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, LocalizePipe],
})
export class BasePage implements OnInit {
  public form = new FormGroup({
    language: new FormControl(SupportedLanguage.En, Validators.required),
    nbrOfPlayers: new FormControl(2, Validators.required),
  });

  public SupportedLanguageEnum = SupportedLanguage;

  constructor(private readonly appService: AppService) {}

  public ngOnInit(): void {
    const { language, nbrOfPlayers } = this.form.controls;

    this.appService.nbrOfPlayers$.pipe(untilDestroyed(this)).subscribe((x) => {
      nbrOfPlayers.setValue(x, { emitEvent: false });
    });
    nbrOfPlayers.valueChanges.pipe(untilDestroyed(this)).subscribe((x) => {
      this.appService.nbrOfPlayers$.next(x!);
    });

    this.appService.language$.pipe(untilDestroyed(this)).subscribe((x) => {
      language.setValue(x, { emitEvent: false });
    });
    language.valueChanges.pipe(untilDestroyed(this)).subscribe((x) => {
      this.appService.language$.next(x!);
    });
  }
}
