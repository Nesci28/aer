import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@UntilDestroy(this)
@Directive({
  selector: "[appIonClick]",
  standalone: true,
})
export class IonCLickDirective implements OnInit {
  @Input()
  public debounceTime = 500;

  @Output()
  public debounceClick = new EventEmitter();

  @HostListener("click", ["$event"])
  public onClick(): void {
    this.clicks.next();
  }

  private clicks = new Subject<void>();

  public ngOnInit(): void {
    this.clicks
      .pipe(untilDestroyed(this), debounceTime(this.debounceTime))
      .subscribe((e) => {
        this.debounceClick.emit(e);
      });
  }
}
