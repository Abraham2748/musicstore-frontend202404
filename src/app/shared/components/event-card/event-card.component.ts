import { Component, Input, OnInit } from '@angular/core';
import { Concert } from '../../models/concert.model';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { TextLimiterPipe } from '../../pipes/text-limiter.pipe';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [TextLimiterPipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent implements OnInit {
  @Input({ required: true }) data!: Concert;

  ngOnInit() {
    if (!this.data.imageUrl) {
      this.data.imageUrl = 'images/generic-concert-poster.jpg';
    }
  }
}
