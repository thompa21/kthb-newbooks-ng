import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RoutingModule } from './routing/routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { NewBooksModule } from './newbooks/newbooks.module';
import { SharedModule } from './shared/shared.module';
import { SizerDirective } from './sizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    SizerDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    SharedModule,
    NewBooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
