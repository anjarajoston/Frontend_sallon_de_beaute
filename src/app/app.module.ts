import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TestCssComponent } from './test-css/test-css.component';

@NgModule({
  declarations: [
    AppComponent,
    //TestCssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    /*RouterModule.forRoot([
      {
        path:'testCss',
        component : TestCssComponent
      }
    ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
