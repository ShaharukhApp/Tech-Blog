import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { OnlinePreparationComponent } from './portfolio/online-preparation/online-preparation.component';
import {PortfolioHomeComponent} from './portfolio/portfolio-home/portfolio-home.component';
import {ErrorComponent} from './error/error.component';
import {Angular7Component} from './post/angular7/angular7.component';
import {AuthGuard} from './auth.guard';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {PasswordrecoveryComponent} from './passwordrecovery/passwordrecovery.component';
import {UserinformComponent} from './post/userinform/userinform.component';
import {SupportComponent} from './support/support.component';
import {PublicqComponent} from './publicq/publicq.component';
import {NmapComponent} from './home_files/nmap/nmap.component';
import {UbuntuinstalltionComponent} from './ubuntu/ubuntuinstalltion/ubuntuinstalltion.component';
import {InstallnodejsubuntuComponent} from './nodejs/installnodejsubuntu/installnodejsubuntu.component';
import {OpensshComponent} from './home_files/openssh/openssh.component';
import {PrivacyComponent} from './privacy/privacy/privacy.component';
const routes: Routes = [


  {path : '', component: HomeComponent},

  {path: 'portfolio', component: PortfolioHomeComponent},

  {path: 'login', component: LoginComponent},

  {path: 'register', component: RegisterComponent},

  {path: 'forget', component: PasswordrecoveryComponent},

  {path: 'portfolio/online-preparation', component: OnlinePreparationComponent},

  {path: 'Angular7', component: Angular7Component, canActivate:[AuthGuard]},

  {path: 'post/userinfo', component:UserinformComponent},

  {path: 'support', component: SupportComponent},

  {path: 'publicQ&A', component: PublicqComponent},

  {path: 'nmap', component: NmapComponent},

  {path: 'ubuntu_installation-19-04', component: UbuntuinstalltionComponent},

  {path: 'ubuntu/nodejs_installation', component: InstallnodejsubuntuComponent},

  {path: 'openssh', component: OpensshComponent},

  {path: 'privacy', component: PrivacyComponent},
 
  {path: '**', component: ErrorComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
