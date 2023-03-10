import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';
import { FormsModule } from "@angular/forms"
import { RouterModule, Routes } from '@angular/router';

import { AddParcelComponent } from './component/add-parcel/add-parcel.component';
import { AddSenderComponent } from './component/add-sender/add-sender.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { DeleteSenderComponent } from './component/delete-sender/delete-sender.component';
import { ListParcelsComponent } from './component/list-parcels/list-parcels.component';
import { ListSendersComponent } from './component/listSenders/list-senders.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { CurrentTimeComponent } from './component/current-time/current-time.component';

const appRoutes:Routes=[
  { path: 'homePage', component:HomepageComponent},
  { path: 'AddParcel', component:AddParcelComponent},
  { path: 'addSender', component:AddSenderComponent },
  { path: 'currenttime',component:CurrentTimeComponent},
  { path: 'listParcels', component:ListParcelsComponent },
  { path: 'deleteSender', component:DeleteSenderComponent},
  { path: 'listSenders', component:ListSendersComponent},
  { path: '**', component:ErrorPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddParcelComponent,
    ErrorPageComponent,
    AddSenderComponent,
    DeleteSenderComponent,
    ListParcelsComponent,
    ListSendersComponent,
    CurrentTimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash:true}),
    HttpClientModule,
    FormsModule],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
