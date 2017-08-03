import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ClockService } from '../clock.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  private color: string;

  constructor(
    private clockService: ClockService
  ) { }

  ngOnInit(): void {
    const color: Object = this.clockService.getColor();

    this.updateColor(color);

    this.clockService
      .getColorEverySeconds()
        .subscribe((color: object) => {
          this.updateColor(color);
        });
  }

  updateColor(color: any): void {
    this.color = `rgb(${color.r}, ${color.g}, ${color.b})`;
  }
}
