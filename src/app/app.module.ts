import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { SearchpageComponent } from './page/searchpage/searchpage.component';
import { MoviedetailsComponent } from './page/moviedetails/moviedetails.component';
import {HttpClientModule} from '@angular/common/http'
import { MovieapiserviceService } from './service/movieapiservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { FooterComponent } from './page/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchpageComponent,
    MoviedetailsComponent,
    NotfoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [MovieapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
