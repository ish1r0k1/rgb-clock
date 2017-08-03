import { Component, AfterContentInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ClockService } from './clock.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-background>
        <div class="full-screen centered-content">
          <app-time></app-time>
        </div>
        <div class="copyright">
          <div class="idea">Inspiration by <a target="_blank" href="http://www.jacopocolo.com/hexclock/">Hex clock</a></div>
          <div class="author">Created by <a target="_blank" href="https://github.com/ish1r0k1">@ish1r0k1</a></div>
        </div>
      </app-background>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  providers: [ ClockService ]
})
export class AppComponent implements AfterContentInit {
  constructor(
    private clockService: ClockService
  ) { }

  ngAfterContentInit() {
    this.clockService.startTimer();
  }
}
