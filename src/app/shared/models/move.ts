import { MoveType } from './move-type.enum';

export class Move {

  uses: number;

  constructor(public name: string,
              public message: string,
              public pwr: number,
              public maxUsage: number,
              public type: MoveType
             ) {
              this.uses = maxUsage;
  }

  use(): boolean {
    if (uses - 1 <= 0)
      return false;
    else {
      this.uses--;
      return true;
    }
  }

}
