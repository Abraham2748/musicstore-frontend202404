import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { SimpleNotificationsModule, Options } from 'angular2-notifications';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleNotificationsModule, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  authService = inject(AuthService);
  notificationsOptions: Options = {
    position: ['top', 'right'],
    timeOut: 3000,
  };
  spinner = inject(NgxSpinnerService);
  constructor() {
    this.authService.verifyToken();
  }
}
