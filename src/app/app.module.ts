import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ClientsSectionComponent } from './components/clients-section/clients-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { WhyUsSectionComponent } from './components/why-us-section/why-us-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PicturesComponent } from './components/pictures/pictures.component';
import { ProgramsComponent } from './components/programs/programs.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    FooterComponent,
    ContactSectionComponent,
    ClientsSectionComponent,
    TeamSectionComponent,
    TestimonialsSectionComponent,
    PortfolioSectionComponent,
    WhyUsSectionComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    HeroSectionComponent,
    NavbarComponent,
    HeaderComponent,
    SwiperComponent,
    PicturesComponent,
    ProgramsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
