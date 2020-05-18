import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomercomponentComponent } from './components/customercomponent/customercomponent.component';
import { OrdercomponentComponent } from './components/ordercomponent/ordercomponent.component';
import { CommunicatorService } from './services/app.communicator.service';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomercomponentComponent,
    OrdercomponentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommunicatorService],
  bootstrap: [AppComponent,CustomercomponentComponent,OrdercomponentComponent]
})
export class AppModule { }
