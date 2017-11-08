import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehicalListCompoentComponent } from './vehical-list-compoent/vehical-list-compoent.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { VehicalDetailsComponent } from './vehical-details/vehical-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'vehicleList', component: VehicalListCompoentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: VehicalDetailsComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})


export class AppRoutingModule { }
