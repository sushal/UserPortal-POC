import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {LayoutModule} from './layout/layout.module';
import {AccountSettingsModule} from './account-settings/account-settings.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    LoginModule,
    DashboardModule,
    AccountSettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
