import { SupportedLanguage } from "./supported-language.enum";

export interface TranslatableText {
  language: SupportedLanguage;
  text: string;
}
