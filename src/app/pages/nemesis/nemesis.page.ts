import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: "app-nemesis",
  templateUrl: "./nemesis.page.html",
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class NemesisPage {
  public nbrOfPlayer = new FormControl(2, Validators.required);

  public generate(): void {
    console.log("generate :>> ");
  }
}
