import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {FacturatorApiCallService} from "./services/facturator-api-call.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ArticlesListComponent } from './components/article/articles-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import { AddClientFormComponent } from './components/add-client-form/add-client-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { ClientListComponent } from './components/client-list/client-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlesListComponent,
    AddClientFormComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [FacturatorApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
