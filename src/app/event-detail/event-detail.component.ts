import { Component, inject, OnInit } from '@angular/core';
import { LoggedInHeaderComponent } from '../shared/components/logged-in-header/logged-in-header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { EventCardComponent } from '../shared/components/event-card/event-card.component';
import { Concert } from '../shared/models/concert.model';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertsService } from '../shared/services/concerts.service';
import { TextLimiterPipe } from '../shared/pipes/text-limiter.pipe';
import { AuthService } from '../shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { BuyDialogComponent } from './buy-dialog/buy-dialog.component';
import { VoucherDialogComponent } from '../shared/components/voucher-dialog/voucher-dialog.component';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [
    LoggedInHeaderComponent,
    FooterComponent,
    EventCardComponent,
    MatButtonModule,
    TextLimiterPipe,
  ],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css',
})
export class EventDetailComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  concert!: Concert;
  eventId = '';
  concertsService = inject(ConcertsService);
  authService = inject(AuthService);
  router = inject(Router);
  matDialog = inject(MatDialog);

  ngOnInit() {
    this.eventId = this.activatedRoute.snapshot.params['id'];
    this.concertsService.getConcertById(this.eventId).subscribe((response) => {
      this.concert = response.data;
    });
  }

  openBuyDialog() {
    if (!this.authService.isLoggedIn()) {
      alert('Debes iniciar sesión para comprar boletos');
      this.router.navigate(['/login']);
    }

    if (this.authService.role() === 'Administrator') {
      alert('Los administradores no pueden comprar boletos');
      return;
    }

    const buyDialogRef = this.matDialog.open(BuyDialogComponent, {
      data: this.concert,
    });
    buyDialogRef.afterClosed().subscribe((saleId) => {
      if (saleId) {
        alert('Boletos comprados exitosamente');
        this.matDialog.open(VoucherDialogComponent, {
          data: saleId,
        });
      }
    });
  }
}
