import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './modules/contacts/contact-form/contact-form.component';
import { SkillsComponent} from './modules/skills/skills/skills.component';
import { GreetingComponent} from './components/greeting/greeting.component';
import { PhoneBookComponent } from './modules/contacts/phone-book/phone-book.component';
import { ContactsComponent } from './modules/contacts/contacts/contacts.component';
import { DisplayMoviesComponent } from './modules/movies/display-movies/display-movies.component';
import { DisplayMusicComponent } from './modules/music/display-music/display-music.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
		path: 'skills',
		component: SkillsComponent
	},
	{
		path: 'greeting',
		component: GreetingComponent
	},
	{
		path: 'phone-book',
		component: PhoneBookComponent
	},
	{
		path: 'contacts',
		component: ContactsComponent
	},
	{
    path: 'movies',
    component: DisplayMoviesComponent
	},
	{
    path: 'music',
    component: DisplayMusicComponent
  }, 

	{
		path: '',
		redirectTo: '/greeting',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
