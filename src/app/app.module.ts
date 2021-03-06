import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { AuthorComponent } from './comments/author.component';

import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { AuthorListComponent } from './comments/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    AuthorComponent,
    HomeComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
