import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './actors/admin/admin.component';
import { ManagerComponent } from './actors/manager/manager.component';
import { UserComponent } from './actors/user/user.component';
import { AddtollComponent } from './pages/addtoll/addtoll.component';
import { AdminfunctionComponent } from './pages/adminfunction/adminfunction.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginformComponent } from './pages/loginform/loginform.component';
import { ManagerfunctionComponent } from './pages/managerfunction/managerfunction.component';
import { ManagerlistComponent } from './pages/managerlist/managerlist.component';
import { MregformComponent } from './pages/mregform/mregform.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TollslistComponent } from './pages/tollslist/tollslist.component';
import { UpdatetollComponent } from './pages/updatetoll/updatetoll.component';
import { UregformComponent } from './pages/uregform/uregform.component';
import { UserfunctionComponent } from './pages/userfunction/userfunction.component';
import { UsershowpriceComponent } from './pages/usershowprice/usershowprice.component';


const routes: Routes = [
  {
    component: HomeComponent,
    path:'',
  },
  {
    component: LoginformComponent,
    path:'login',
  },
  {
    component: UserComponent,
    path:'user',
    children: [
      {
        path: 'uregistration', 
        component: UregformComponent, 
      },
      {
        path: 'myprofile', 
        component: ProfileComponent,
      },
      {
        path: 'userhome',
        component: UserfunctionComponent,
      },
      {
        path: 'showprice',
        component: UsershowpriceComponent,
      },
    ],
  },
  {
    component: ManagerComponent,
    path:'manager',
    children: [
      {
        path:'mregistration',
        component: MregformComponent
      },
      {
        path: 'managerhome',
        component: ManagerfunctionComponent,
      },
      {
        path: 'myprofile', 
        component: ProfileComponent,
      },
      {
        path: 'addorupdatetoll',
        component: AddtollComponent,
      },
      {
        path: 'updatetoll/:id',
        component: UpdatetollComponent,
      },
      {
        path: 'tollslist', 
        component: TollslistComponent,
      },
    ],
  },
  {
    component: AdminComponent,
    path:'admin',
    children: [
      {
        path: 'myprofile', 
        component: ProfileComponent,
      },
      {
        path: 'adminhome', 
        component: AdminfunctionComponent,
      },
      {
        path: 'managerlist',
        component: ManagerlistComponent,
      },
      {
        path: 'tollslist',
        component: TollslistComponent,
      },
  ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
