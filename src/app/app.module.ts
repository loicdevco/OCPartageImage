import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { PartageImageComponent } from './partage-image/partage-image.component';
import { PartageImageListComponent } from './partage-image-list/partage-image-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { SimplePartageImageComponent } from './simple-partage-image/simple-partage-image.component';

@NgModule({
  declarations: [
    AppComponent,
    PartageImageComponent,
    PartageImageListComponent,
    HeaderComponent,
    LandingPageComponentComponent,
    SimplePartageImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
