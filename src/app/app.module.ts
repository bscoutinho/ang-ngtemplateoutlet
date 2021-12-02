import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CardModule } from './card/card.component.module';

import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT, 'brasil');

@NgModule({
  imports:      [
    BrowserModule,
    CardModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'brasil',
  }]
})
export class AppModule { }
