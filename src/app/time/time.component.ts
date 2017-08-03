import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ClockService } from '../clock.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  private times: Date;

  constructor(
    private clockService: ClockService
  ) { }

  ngOnInit(): void {
    this.times = this.clockService.getTimes();

    this.clockService
      .getTimesEverySeconds()
        .subscribe(t => this.updateTimes(t));
  }

  updateTimes(times) {
    this.times = times;
  }
}
