import { Component, inject, OnInit } from '@angular/core';
import { Sale } from '../../models/sale.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConcertsService } from '../../services/concerts.service';

@Component({
  selector: 'app-voucher-dialog',
  standalone: true,
  imports: [],
  templateUrl: './voucher-dialog.component.html',
  styleUrl: './voucher-dialog.component.css',
})
export class VoucherDialogComponent implements OnInit {
  saleId = inject(MAT_DIALOG_DATA) as number;
  sale!: Sale;
  concertsService = inject(ConcertsService);

  ngOnInit() {
    this.concertsService.getSale(this.saleId).subscribe((response) => {
      this.sale = response.data;
    });
  }
}
