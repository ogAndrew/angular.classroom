import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { ContactsService } from '../../services/contacts.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ContactFormComponent, ContactsComponent, PhoneBookComponent],
  exports: [ContactFormComponent, ContactsComponent, PhoneBookComponent],
  providers: [ContactsService]
})
export class ContactsModule {}
