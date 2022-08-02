import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './MyComponents/background/background.component';
import { ContactComponent } from './MyComponents/contact/contact.component';

const routes: Routes = [

  {
    path:'',
    component:BackgroundComponent,
    pathMatch:'full'
    
  },
  {
    path:'contact',
    component:ContactComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
