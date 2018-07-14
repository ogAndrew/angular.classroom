import { Component, OnInit } from '@angular/core';

import { Contact } from '../../../models/contact';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  contacts: Contact[];
  dataService: ContactsService;
  constructor(private contactsService: ContactsService) {
    this.dataService = contactsService;
  }

  ngOnInit() {
    this.dataService
      .getContacts()
      .subscribe(contacts => (this.contacts = contacts));
  }
}
