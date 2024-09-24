import { Component } from '@angular/core';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SimpleHeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FooterComponent,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
