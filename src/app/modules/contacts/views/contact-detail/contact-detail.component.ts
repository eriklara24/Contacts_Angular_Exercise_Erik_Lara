import { Component, OnInit } from '@angular/core';
import { ContactsApiService } from '../../../../services/contacts/contacts-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  id: string | null= '';
  contact: any;
  editContactModalIsVisible: boolean = false;

  constructor(private _activatedRoute: ActivatedRoute,
    private contactsApiService: ContactsApiService) { }

  ngOnInit(): void {
    this.id=this._activatedRoute.snapshot.paramMap.get("contactID");
    if (this.id !== null) {
      this.contactsApiService.getContactByID(this.id).subscribe(data => (this.contact = data));
    }
  }

  editContact() {
    this.editContactModalIsVisible = true;
    if (this.id !== null) {
      this.contactsApiService.getContactByID(this.id).subscribe(data => (this.contact = data));
    }
  }

  close(){
    this.editContactModalIsVisible = false;
  }
}
