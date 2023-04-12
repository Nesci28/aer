import { Component, OnInit } from "@angular/core";
import { KeepAwake } from "@capacitor-community/keep-awake";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent implements OnInit {
  public async ngOnInit(): Promise<void> {
    await KeepAwake.keepAwake();
  }
}
