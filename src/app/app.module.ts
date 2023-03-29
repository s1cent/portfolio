import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstParagraphComponent } from './home-page/first-paragraph/first-paragraph.component';
import { SmallProjectsComponent } from './home-page/small-projects/small-projects.component';
import { SkillsComponent } from './home-page/skills/skills.component';
import { ContactsComponent } from './home-page/contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstParagraphComponent,
    SmallProjectsComponent,
    SkillsComponent,
    ContactsComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
