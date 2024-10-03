import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
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
import { MatSelectModule } from '@angular/material/select';
import { RegisterRequestBody } from '../shared/models/auth.model';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    SimpleHeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FooterComponent,
    RouterLink,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    documentType: new FormControl('', [Validators.required]),
    documentNumber: new FormControl('', [Validators.required]),
  });
  notifications = inject(NotificationsService);

  register() {
    const body: RegisterRequestBody = {
      age: Number.parseInt(this.registerForm.controls.age.value!),
      confirmPassword: this.registerForm.controls.password.value!,
      documentNumber: this.registerForm.controls.documentNumber.value!,
      documentType: this.registerForm.controls.documentType.value!,
      email: this.registerForm.controls.email.value!,
      firstName: this.registerForm.controls.name.value!,
      lastName: this.registerForm.controls.lastName.value!,
      password: this.registerForm.controls.password.value!,
    };
    this.authService.register(body).subscribe(() => {
      this.notifications.success('Registro exitoso', 'Logueate para continuar');
      this.router.navigate(['/login']);
    });
  }
}
