import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { ShowCounComponent } from './country/show-coun/show-coun.component';
import { AddEditCounComponent } from './country/add-edit-coun/add-edit-coun.component';
import { InvitedComponent } from './invited/invited.component';
import { ShowInvComponent } from './invited/show-inv/show-inv.component';
import { AddEditInvComponent } from './invited/add-edit-inv/add-edit-inv.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    ShowCounComponent,
    AddEditCounComponent,
    InvitedComponent,
    ShowInvComponent,
    AddEditInvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
