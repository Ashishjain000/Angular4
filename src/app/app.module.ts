import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { vehicleService } from './vehicle.service';
import { AppComponent } from './app.component';
import { VehicalListCompoentComponent } from './vehical-list-compoent/vehical-list-compoent.component';
import { VehicalDetailsComponent } from './vehical-details/vehical-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    VehicalListCompoentComponent,
    VehicalDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [vehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
