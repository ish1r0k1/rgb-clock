import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ClockService {
  private timer;

  constructor() {
    const source = Observable.interval(1000);
    this.timer = source.publish();
  }

  startTimer = (): void => {
    this.timer.connect();
  }

  getTimesEverySeconds = (): Observable<Date> => {
    return this.timer
      .map(() => this.getTimes());
  }

  getTimes = (): Date => {
    return (new Date());
  }

  getColorEverySeconds = (): Observable<Object> => {
    return this.timer
      .map(() => this.getColor());
  }

  getColor = (): Object => {
    const times = this.getTimes();

    return this.dateToRgb(times);
  }

  private dateToRgb = (times: Date): Object => {
    const hours = times.getHours(),
          minutes = times.getMinutes(),
          seconds = times.getSeconds();

    return {
      r: hours,
      g: minutes,
      b: seconds
    };
  }
}
