import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [
    { 
      firstName: 'Franklin',
      lastName: 'Roosevelt',
      phoneNumber: '123456789',
      email: 'Franklin.Rose@wh.gov'
    },
    { 
      firstName: 'Winston',
      lastName: 'Churchill',
      phoneNumber: '987654321',
      email: 'Winston.Churchill@10downy.uk.commonwealth'
    },
    { 
      firstName: 'Joseph',
      lastName: 'Stalin',
      phoneNumber: '0011110011',
      email: 'Joseph.Stalin@kremlin.ussr'
    }
  ];

  /* Here was the implementation for the observable Hands-On 5 */
  getContacts = (): Observable<Contact[]> => {
    return of(this.contacts);
  };

  addContact (contact: Contact) {
    this.contacts.push(contact);
  }
  
}
