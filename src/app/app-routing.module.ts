import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent  } from './modules/contacts/views/contact-detail/contact-detail.component';
import { LandingComponent } from './modules/contacts/views/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'contact-detail/:contactID', component: ContactDetailComponent},
  // {
  //   path: 'contact-detail/:contactID',
  //   loadChildren: () => import('./modules/contacts/views/contact-detail/contact-detail.component').then(m => m.ContactDetailComponent)
  //   loadChildren: './modules/contacts/views/contact-detail/contact-detail.component'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
