import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TripComponent } from './trip/trip.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  // Home
  { path: 'home', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'create-a-trip', component: TripComponent},

  // QOL Paths
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
