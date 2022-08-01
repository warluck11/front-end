import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { BackgroundComponent } from './MyComponents/background/background.component';
import { MiddleTextComponent } from './MyComponents/middle-text/middle-text.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { FooterComponent } from './MyComponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundComponent,
    MiddleTextComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
