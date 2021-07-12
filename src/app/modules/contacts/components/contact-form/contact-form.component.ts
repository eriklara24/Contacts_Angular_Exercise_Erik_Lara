import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ContactsApiService } from '../../../../services/contacts/contacts-api.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactForm implements OnInit {

  @Input() contact: any = {};
  buttonText: string = 'Save';
  
  contactForm: FormGroup = this.formBuilder.group({
    _id: this.contact._id,
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    nickName: new FormControl(''),
    emailsFormArray: new FormArray([]),
    phonesFormArray: new FormArray([])
  });

  get emailsFormArray(): FormArray {
    return this.contactForm.get("emailsFormArray") as FormArray
  }

  get phonesFormArray(): FormArray {
    return this.contactForm.get("phonesFormArray") as FormArray
  }

  get firstName(): FormControl {
    return this.contactForm.get("firstName") as FormControl
  }

  constructor(
    private contactsApiService: ContactsApiService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    console.log(this.contact);
    if (Object.keys(this.contact).length === 0 && this.contact.constructor === Object) {
      this.buttonText = 'Create';
      this.contact = {
        _id: '',
        firstName: '',
        lastName: '',
        nickName: '',
        emails: [],
        phones:[]
      };
    }

    this.contactForm.controls['firstName'].setValue(this.contact.firstName);
    this.contactForm.controls['lastName'].setValue(this.contact.lastName);
    this.contactForm.controls['nickName'].setValue(this.contact.nickName);
    
    for (let i = 0; i < this.contact.emails.length; i += 1) {
      this.emailsFormArray.push(new FormControl(this.contact.emails[i], Validators.email));
    }

    for (let i = 0; i < this.contact.phones.length; i += 1) {
      this.phonesFormArray.push(new FormControl(this.contact.phones[i]));
    }
  }

  addEmail(){
    this.emailsFormArray.push(new FormControl(''));
    console.log(this.emailsFormArray.controls[0].errors);
    console.log(this.emailsFormArray.controls[0].invalid);
  }

  deleteEmail(index: number){
    this.emailsFormArray.removeAt(index);
  }

  addPhone(){
    this.phonesFormArray.push(new FormControl(''));
  }

  deletePhone(index: number){
    this.phonesFormArray.removeAt(index);
  }

  createOrUpdateContact(): void{
    if (this.firstName) {
      try {
        if (this.contact._id !== undefined && this.contact._id !== '' ) {
          this.contactsApiService.updateContact(this.contactForm.value).subscribe();
        } else {
          this.contactsApiService.createContact(this.contactForm.value).subscribe();
        }
      } catch (error) {
        console.log(error);
      } 
    }
  }
}
