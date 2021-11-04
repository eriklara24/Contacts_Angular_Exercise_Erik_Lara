import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import ContactI from '../../resources/contact.interface';

function handleError(error: HttpErrorResponse) {
  console.log(error);
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}

@Injectable({
  providedIn: 'root'
})

export class ContactsApiService {
  private urlAPI = 'http://webdev-contacts.herokuapp.com/contacts';

  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<ContactI[]> {
    return this.http.get<ContactI[]>(this.urlAPI);
  }

  getContactByID(id: string): Observable<ContactI> {
    return this.http.get<ContactI>(`${this.urlAPI}/${id}`);
  }

  createContact(data: any): ContactI {
    let contactData = {
      firstName: data.firstName,
      lastName: data.lastName,
      nickName: data.nickName,
      emails: [data.emailsFormArray],
      phones: [data.phonesFormArray]
    }

    let contact: ContactI = {
      _id: '',
      firstName: '',
      lastName: '',
      nickName: '',
      phones: [],
      emails: []
    };
  
    console.log(data)
    this.http.post<ContactI>(this.urlAPI, contactData)
    // Sorry i tried some error-catching sintaxes
    // .pipe(
    //   catchError((err) => {
    //     console.log(err);
    //     return throwError(err);
    //   })
    // );

    // .subscribe({
    //   next: data => {
    //     contact = data;
    //   },
    //   error: error => {
    //     throw error;
    //   }
    // });

    //   .subscribe(
    //     (response) => {
    //       contact = response;
    //     },
    //     (error) => {
    //       //Handle the error here
    //       //If not handled, then throw it
    //       throw error; 
    //     }
    //  )

    .subscribe(
      data => console.log('success', data),
      error => {
        console.log(error);
        throwError(error);
      }
    );

    return contact;
  }

  updateContact(data: any): ContactI {
    const contactData = {
      firstName: data.firstName,
      lastName: data.lastName,
      nickName: data.nickName,
      emails: [data.emailsFormArray],
      phones: [data.phonesFormArray]
    }

    let contact: ContactI = {
      _id: '',
      firstName: '',
      lastName: '',
      nickName: '',
      phones: [],
      emails: []
    };
  
    console.log(data.id);
    console.log(contactData);
    
    this.http.put<ContactI>(`${this.urlAPI}/${data.id}`, contactData)
    .subscribe(
      data => console.log('success', data),
      error => {
        console.log(error);
        throwError(error);
      }
    );

    return contact;
  }

  deleteContact(id: string): Observable<any> {
    return this.http.delete<any>(`${this.urlAPI}/${id}`);
  }
}
