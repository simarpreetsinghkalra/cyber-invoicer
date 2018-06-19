import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrintInvoiceComponent } from './print-invoice/print-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrintInvoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    RouterModule.forRoot([
      {
         path: 'app-print-invoice',
         component: PrintInvoiceComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
