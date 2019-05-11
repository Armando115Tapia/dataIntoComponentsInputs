import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PadreComponent } from './pages/padre/padre.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './pages/padre/hijo/hijo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PadreComponent,
    FooterComponent,
    HijoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
