import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-reset-password-dialog',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './reset-password-dialog.component.html',
  styleUrl: './reset-password-dialog.component.css',
})
export class ResetPasswordDialogComponent {
  data = inject(MAT_DIALOG_DATA) as { email: string };
  authService = inject(AuthService);
  router = inject(Router);
  dialogRef = inject(DialogRef);

  verifyPasswords(form: NgForm) {
    const password = form.controls['password'];
    const confirmPassword = form.controls['confirmPassword'];

    if (
      password &&
      confirmPassword &&
      password.value === confirmPassword.value
    ) {
      confirmPassword.setErrors(null);
    } else {
      confirmPassword.setErrors({ mismatch: true });
    }
  }

  resetPassword(formValue: any) {
    this.authService
      .resetPassword({
        email: this.data.email,
        token: formValue.token,
        newPassword: formValue.password,
        confirmNewPassword: formValue.confirmPassword,
      })
      .subscribe((response) => {
        if (response.success) {
          alert('Contraseña cambiada con éxito');
          this.router.navigate(['/login']);
          this.dialogRef.close();
        }
      });
  }
}
