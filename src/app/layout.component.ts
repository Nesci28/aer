import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { layoutPageText } from "./layout.i18n";
import { LocalizePipe } from "./pipes/localize.pipe";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  standalone: true,
  imports: [IonicModule, LocalizePipe],
})
export class LayoutComponent {
  public layoutPageText = layoutPageText;
}
