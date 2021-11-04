import { Component, OnInit } from '@angular/core';
import { ContactsApiService } from '../../../../services/contacts/contacts-api.service';
import ContactsI from '../../../../resources/contact.interface';

@Component({
  selector: 'app-contact-listing',
  templateUrl: './contact-listing.component.html',
  styleUrls: ['./contact-listing.component.css']
})

export class ContactListingComponent implements OnInit {
  contacts: ContactsI[] = [];
  newContactModalIsVisible: boolean = false;
  deleteModalIsVisible: boolean = false;
  deleteID: string = '';

  constructor(private contactsApiService: ContactsApiService) { }

  ngOnInit(): void {
    this.contactsApiService.getAllContacts().subscribe(data => (this.contacts = data));
  }

  newContactButton() {
    this.newContactModalIsVisible = true;
  }

  deleteContactButton(id: string) {
    this.deleteID = id;
    this.deleteModalIsVisible = true;
  }

  close(){
    this.newContactModalIsVisible = false;
    this.deleteModalIsVisible = false;
    this.contactsApiService.getAllContacts().subscribe(data => (this.contacts = data));
  }
  
  deleteContact() {
    this.contactsApiService.deleteContact(this.deleteID).subscribe(() => {
      this.contactsApiService.getAllContacts().subscribe(data => (this.contacts = data));
    });
    this.deleteModalIsVisible = false;
  }
}
