import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomercomponentComponent } from './components/customercomponent/customercomponent.component';
import { OrdercomponentComponent } from './components/ordercomponent/ordercomponent.component';
import { CommunicatorService } from './services/app.communicator.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomercomponentComponent,
    OrdercomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommunicatorService],
  bootstrap: [AppComponent,CustomercomponentComponent,OrdercomponentComponent]
})
export class AppModule { }
