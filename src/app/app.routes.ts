import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { isNotLoggedIn } from './app.guard';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MyPurchasesComponent } from './customer/my-purchases/my-purchases.component';
import { ChangePasswordComponent } from './customer/change-password/change-password.component';
import { SalesComponent } from './admin/sales/sales.component';
import { EventsComponent } from './admin/events/events.component';
import { GenresComponent } from './admin/genres/genres.component';
import { ReportsComponent } from './admin/reports/reports.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
    canActivate: [isNotLoggedIn],
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent,
  },
  {
    path: 'forgot-password',
    pathMatch: 'full',
    component: ForgotPasswordComponent,
  },
  {
    path: 'admin',
    pathMatch: 'prefix',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sales',
      },
      {
        path: 'sales',
        pathMatch: 'full',
        component: SalesComponent,
      },
      {
        path: 'events',
        pathMatch: 'full',
        component: EventsComponent,
      },
      {
        path: 'genres',
        pathMatch: 'full',
        component: GenresComponent,
      },
      {
        path: 'reports',
        pathMatch: 'full',
        component: ReportsComponent,
      },
    ],
  },
  {
    path: 'customer',
    pathMatch: 'prefix',
    component: CustomerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-purchases',
      },
      {
        path: 'my-purchases',
        pathMatch: 'full',
        component: MyPurchasesComponent,
      },
      {
        path: 'change-password',
        pathMatch: 'full',
        component: ChangePasswordComponent,
      },
    ],
  },
  {
    path: 'event-detail/:id',
    pathMatch: 'full',
    component: EventDetailComponent,
  },
];
