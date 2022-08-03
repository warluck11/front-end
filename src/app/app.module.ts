import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { BackgroundComponent } from './MyComponents/background/background.component';
import { MiddleTextComponent } from './MyComponents/middle-text/middle-text.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Background1Component } from './MyComponents/background1/background1.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundComponent,
    MiddleTextComponent,
    ContactComponent,
    FooterComponent,
    Background1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
