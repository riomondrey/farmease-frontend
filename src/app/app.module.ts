import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HireToolsComponent } from './hire-tools/hire-tools.component';
import { LeaseToolsComponent } from './lease-tools/lease-tools.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { RegisternewmemberComponent } from './registernewmember/registernewmember.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    HireToolsComponent,
    LeaseToolsComponent,
    ReviewsComponent,
    LoginComponent,
    RegisternewmemberComponent,
   
  ],
  imports: [BrowserModule, AppRoutingModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
