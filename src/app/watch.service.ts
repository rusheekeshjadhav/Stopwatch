import { Injectable } from '@angular/core';
import { SprintLap } from './sprint/sprint.component';

@Injectable({
    providedIn:'platform'
})
export class WatchService {

  constructor() { }

  val: number = 0;
  sec: number = 0;
  min: number = 0;
  hr: number = 0;
  ms: number = 0;
  intv: any;
  str!: number;
  curr: number = 0;
  pos: number = Date.now();
  flag1: boolean = false;
  flag2: boolean = true;
  flag3: boolean = true;
  flag4: boolean = true;
  flag5: boolean = true;

  spval: SprintLap[] = [];

  start(): void {
      if (this.flag1 == false) {
          if (this.flag5) {
              this.str = this.pos = Date.now();
          }

          this.curr = Date.now();
          this.val = this.val + this.curr - this.pos;

          this.intv = setInterval(() => {
              this.ms = Math.floor((Date.now() - this.str - this.val) % 1000);
              this.sec = Math.floor(((Date.now() - this.str - this.val) / 1000) % 60);
              this.min = Math.floor((((Date.now() - this.str - this.val) / 1000) / 60) % 3600);
              this.hr = Math.floor(((Date.now() - this.str - this.val) / 1000) / 3600);
          }, 1);

          this.flag1 = true;
          this.flag2 = true;
          this.flag3 = true;
          this.flag4 = false;
      }
  }

  pause(): void {
      this.pos = Date.now();
      clearInterval(this.intv);
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag5 = false;
  }

  reset(): void {
      clearInterval(this.intv);
      this.val = this.ms = this.sec = this.min = this.hr = 0;
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = true;
      this.flag4 = true;
      this.flag5 = true;
      this.spval = [];
  }

  sprint(): void {
      const sl = new SprintLap();

      sl.hour = this.hr;
      sl.minute = this.min;
      sl.second = this.sec;
      sl.millis = this.ms;

      this.spval.push(sl);
  }
}
