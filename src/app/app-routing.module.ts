import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HireToolsComponent } from './hire-tools/hire-tools.component';
import { LeaseToolsComponent } from './lease-tools/lease-tools.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ScrollLinkDirective } from 'src/scroll-link.directive';
import { LoginComponent } from './login/login.component';
import { RegisternewmemberComponent } from './registernewmember/registernewmember.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'hire-tools', component: HireToolsComponent },
  { path: 'lease-tools', component: LeaseToolsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register-new-member', component: RegisternewmemberComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [ScrollLinkDirective],
  
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
