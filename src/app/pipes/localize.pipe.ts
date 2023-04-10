import { Pipe, PipeTransform } from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { SupportedLanguage } from "../../interfaces/supported-language.enum";
import { TranslatableText } from "../../interfaces/translatable-text.interface";
import { AppService } from "../app.service";

@UntilDestroy()
@Pipe({ name: "localize", pure: false, standalone: true })
export class LocalizePipe implements PipeTransform {
  private language = SupportedLanguage.Fr;

  private text: string | undefined = undefined;

  private isSubscribe = false;

  constructor(private readonly appService: AppService) {}

  public transform(translatableTexts: TranslatableText[]): string {
    if (!this.isSubscribe) {
      this.subscriptions();
    }

    if (this.text) {
      return this.text;
    }

    const translatableText = translatableTexts.find((x) => {
      return x.language === this.language;
    })!;
    this.text = translatableText.text;
    return translatableText.text;
  }

  protected subscriptions(): void {
    this.appService.language$.pipe(untilDestroyed(this)).subscribe((x) => {
      this.language = x;
      this.text = undefined;
    });
  }
}
