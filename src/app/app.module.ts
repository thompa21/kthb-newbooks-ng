import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RoutingModule } from './routing/routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { NewBooksComponent } from './newbooks/newbooks.component';
import { SharedModule } from './shared/shared.module';
import { SizerDirective } from './sizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewBooksComponent,
    SizerDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
