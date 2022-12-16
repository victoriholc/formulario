import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ClienteTwowayDatabidingComponent } from './cliente-twoway-databiding/cliente-twoway-databiding.component';
import { ClienteButtonSalvarComponent } from './cliente-button-salvar/cliente-button-salvar.component';
import { ClienteButtonSalvarRegrasNoHtmlComponent } from './cliente-button-salvar-regras-no-html/cliente-button-salvar-regras-no-html.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteTwowayDatabidingComponent,
    ClienteButtonSalvarComponent,
    ClienteButtonSalvarRegrasNoHtmlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
