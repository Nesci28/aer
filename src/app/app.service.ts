import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { SupportedLanguage } from "../interfaces/supported-language.enum";

@Injectable({
  providedIn: "root",
})
export class AppService {
  private languageBhv = new BehaviorSubject<SupportedLanguage>(
    SupportedLanguage.Fr,
  );

  public language$ = this.languageBhv.asObservable();

  private nbrOfPlayersBhv = new BehaviorSubject<number>(2);

  public nbrOfPlayers$ = this.nbrOfPlayersBhv.asObservable();
}
