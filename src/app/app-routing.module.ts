import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { OnlinePreparationComponent } from './portfolio/online-preparation/online-preparation.component';
import {PortfolioHomeComponent} from './portfolio/portfolio-home/portfolio-home.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [


  {path : '', component: HomeComponent},

  {path: 'portfolio', component: PortfolioHomeComponent},

  {path: 'portfolio/online-preparation', component: OnlinePreparationComponent},

  {path: '**', component: ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
