import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListingComponent } from './components/contact-listing/contact-listing.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ContactForm } from './components/contact-form/contact-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ContactDetailComponent } from './views/contact-detail/contact-detail.component';
import { LandingComponent } from './views/landing/landing.component'
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    ContactListingComponent,
    ContactForm,
    ContactDetailComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    NzListModule,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    NzModalModule,
    AppRoutingModule,
    NzCardModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactListingComponent,
    ContactForm,
    ContactDetailComponent
  ]
})
export class ContactsModule { }
