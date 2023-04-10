import { SupportedLanguage } from "../../interfaces/supported-language.enum";
import { TranslatableText } from "../../interfaces/translatable-text.interface";

export class TranslatableTextUtil {
  public static build(textEn: string, textFr: string): TranslatableText[] {
    return [
      { language: SupportedLanguage.Fr, text: textFr },
      { language: SupportedLanguage.En, text: textEn },
    ];
  }
}
