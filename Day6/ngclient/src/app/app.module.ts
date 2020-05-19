import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SecureCallComponent } from './secure-call/secure-call.component';
import { SecurityTokenInterceptorService } from './secure-call/app.interceptor';

@NgModule({
  declarations: [AppComponent, SecureCallComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: SecurityTokenInterceptorService, multi: true}],
  bootstrap: [SecureCallComponent]
})
export class AppModule {}
