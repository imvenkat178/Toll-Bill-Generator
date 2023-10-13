import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UregformComponent } from './pages/uregform/uregform.component';
import { MregformComponent } from './pages/mregform/mregform.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './actors/user/user.component';
import { AdminComponent } from './actors/admin/admin.component';
import { ManagerComponent } from './actors/manager/manager.component';
import { LoginformComponent } from './pages/loginform/loginform.component';
import { AdminfunctionComponent } from './pages/adminfunction/adminfunction.component';
import { UserfunctionComponent } from './pages/userfunction/userfunction.component';
import { ManagerfunctionComponent } from './pages/managerfunction/managerfunction.component';
import { ManagerlistComponent } from './pages/managerlist/managerlist.component';
import { TollslistComponent } from './pages/tollslist/tollslist.component';
import { AddtollComponent } from './pages/addtoll/addtoll.component';
import { UpdatetollComponent } from './pages/updatetoll/updatetoll.component';
import { UsershowpriceComponent } from './pages/usershowprice/usershowprice.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UregformComponent,
    MregformComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    ManagerComponent,
    LoginformComponent,
    AdminfunctionComponent,
    UserfunctionComponent,
    ManagerfunctionComponent,
    ManagerlistComponent,
    TollslistComponent,
    AddtollComponent,
    UpdatetollComponent,
    UsershowpriceComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
