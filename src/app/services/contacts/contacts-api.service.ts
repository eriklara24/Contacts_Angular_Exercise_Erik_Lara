import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import ContactI from '../../resources/contacts.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsApiService {
  private urlAPI = 'http://webdev-contacts.herokuapp.com/contacts/';

  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<ContactI[]> {
    return this.http.get<ContactI[]>(this.urlAPI);
  }

  getContactByID(id: string): Observable<ContactI> {
    return this.http.get<ContactI>(`${this.urlAPI}/${id}`);
  }

  createContact(data: any): Observable<ContactI> {
    const contactData = {
      firstName: data.firstName,
      lastName: data.lastName,
      nickName: data.nickName,
      emails: [data.email],
      phone: [data.phone]
    }
    return this.http.post<ContactI>(this.urlAPI, contactData);
  }

  updateContact(data: any): Observable<ContactI> {
    const contactData = {
      firstName: data.firstName,
      lastName: data.lastName,
      nickName: data.nickName,
      emails: [data.email],
      phone: [data.phone]
    }
    return this.http.put<ContactI>(`${this.urlAPI}/${data.id}`, contactData);
  }

  deleteContact(id: string): Observable<any> {
    return this.http.delete<any>(`${this.urlAPI}/${id}`);
  }
}
