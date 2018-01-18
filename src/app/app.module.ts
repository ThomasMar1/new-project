import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgIf } from '@angular/common';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './filter.pipe';

import { LoggingService } from './logging.service';
import { DataService } from './data.service';
import { ContactsComponent } from './contacts/contacts.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
    ContactsComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'directory', component: DirectoryComponent },
      { path: '', component: HomeComponent },
      { path: 'contacts', component: ContactsComponent}, 
      { path: 'register', component: RegisterComponent},

    ])
  ],
  
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
