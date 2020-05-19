import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  RegisterUser,
  LoginUser,
  Product,
  ResponseData
} from './secure-call.models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SecureCallService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5000';
  }

  // method to register the user
  registerUser(user: RegisterUser): Observable<ResponseData> {
    let userRegistered: Observable<ResponseData>;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    userRegistered = this.httpClient.post<ResponseData>(
      `${this.url}/api/Auth/Register`,
      user,
      options
    );
    return userRegistered;
  }

  // method to login the user the user
  authenticateUser(user: LoginUser): Observable<ResponseData> {
    let userAuthenticated: Observable<ResponseData>;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    userAuthenticated = this.httpClient.post<ResponseData>(
      `${this.url}/api/Auth/Login`,
      user,
      options
    );
    return userAuthenticated;
  }

  // method to get products
  getProducts(token: string): Observable<Product[]> {
 
     let products: Observable<Product[]>;
     const headerValues = new HttpHeaders();

       products = this.httpClient.get<Product[]>(`${this.url}/api/Products`);
     return products;
  }
}