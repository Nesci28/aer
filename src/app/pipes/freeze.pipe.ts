import { Pipe, PipeTransform } from "@angular/core";
import { cloneDeep } from "lodash";

@Pipe({ name: "freeze", standalone: true, pure: true })
export class FreezePipe implements PipeTransform {
  private arr: unknown[] | undefined = undefined;

  public transform(value: unknown[]): number {
    if (!this.arr) {
      this.arr = cloneDeep(value);
    }

    return this.arr.length;
  }
}
