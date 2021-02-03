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
    const can = this.uses > 0;
    this.uses = this.uses >= 0 ? this.uses - 1 : 0;
    return can;
  }

}
