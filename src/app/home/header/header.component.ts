import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HeaderService } from './header.service';
import { map, Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchBarFormControl = new FormControl('');
  headerService = inject(HeaderService);

  constructor() {
    this.headerService.searchValue$ =
      this.searchBarFormControl.valueChanges.pipe(
        map((value) => (value ? value : ''))
      );
  }
}
