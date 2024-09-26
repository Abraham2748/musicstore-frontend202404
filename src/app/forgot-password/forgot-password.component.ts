import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';
import { AuthService } from '../shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordDialogComponent } from './reset-password-dialog/reset-password-dialog.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    SimpleHeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FooterComponent,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  authService = inject(AuthService);
  router = inject(Router);
  matDialog = inject(MatDialog);

  sendToken(email: string) {
    this.authService.sendToken(email).subscribe((response) => {
      alert('Token enviado');
      this.matDialog.open(ResetPasswordDialogComponent);
    });

    // this.authService.login(email, password).subscribe((response) => {
    //   localStorage.setItem('token', response.data.token);
    //   this.authService.verifyToken();
    //   alert('Inicio de sesión correcto');
    //   const nextRoute =
    //     this.authService.role() === 'Administrator' ? '/admin' : '/customer';
    //   this.router.navigate([nextRoute]);
    // });
  }
}
