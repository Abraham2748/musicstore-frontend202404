import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from '../shared/components/event-card/event-card.component';
import { HomeService } from './home.service';
import { Genre } from '../shared/models/genre.model';
import { Concert } from '../shared/models/concert.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HeaderService } from './header/header.service';
import { HighlightableDirective } from '../shared/directives/highlightable.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatSelectModule,
    EventCardComponent,
    ReactiveFormsModule,
    HighlightableDirective,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  homeService = inject(HomeService);

  genres: Genre[] = [];
  concerts: Concert[] = [];

  initialConcerts: Concert[] = [];

  currentGenre = new FormControl(0);

  headerService = inject(HeaderService);

  searchGenreValue = 0;
  searchBarValue = '';

  ngOnInit() {
    this.homeService.getData().subscribe((data) => {
      this.genres = data.genres;
      this.initialConcerts = data.concerts;
      this.concerts = this.initialConcerts;
    });

    this.currentGenre.valueChanges.subscribe((value) => {
      this.searchGenreValue = value || 0;
      this.filterConcerts();
    });

    this.headerService.searchValue$.subscribe((value) => {
      this.searchBarValue = value;
      this.filterConcerts();
    });
  }

  filterConcerts() {
    this.concerts = this.initialConcerts
      .filter((concert: Concert) =>
        this.searchGenreValue === 0
          ? true
          : concert.genreId === this.searchGenreValue
      )
      .filter((concert: Concert) => {
        return concert.description
          .toLowerCase()
          .includes(this.searchBarValue.toLowerCase());
      });
  }
}
