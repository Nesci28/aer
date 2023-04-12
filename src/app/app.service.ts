import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { SupportedLanguage } from "../interfaces/supported-language.enum";

@Injectable({
  providedIn: "root",
})
export class AppService {
  public language$ = new BehaviorSubject<SupportedLanguage>(
    SupportedLanguage.Fr,
  );

  public nbrOfPlayers$ = new BehaviorSubject<number>(2);
}
