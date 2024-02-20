import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { ManagerComponent } from './manager/manager.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './client/client.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ManagerComponent,
    IndexComponent,
    ClientComponent,
    RendezVousComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'index',
        component : IndexComponent
      },{
        path:'manager',
        component : ManagerComponent
      },{
        path:'service',
        component : ServiceComponent
      },{
        path:'client',
        component : ClientComponent
      },{
        path:'rendez-vous',
        component : RendezVousComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
