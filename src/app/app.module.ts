import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';


import { SkillsModule } from './modules/skills/skills.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { AppRoutingModule } from './/app-routing.module';

import { MoviesModule } from './modules/movies/movies.module';

import { MusicModule } from './modules/music/music.module';



@NgModule({
  declarations: [AppComponent, GreetingComponent],
 
  imports: [BrowserModule, FormsModule, SkillsModule, ContactsModule, AppRoutingModule, MoviesModule, MusicModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


