import { Component, OnInit } from "@angular/core";
import {
  RegisterUser,
  LoginUser,
  Product,
  ResponseData
} from "./secure-call.models";
import { SecureCallService } from "./secure-call.service";
@Component({
  selector: "app-secure-call-component",
  templateUrl: "./secure-call.component.html"
})
export class SecureCallComponent implements OnInit {
  createUser: RegisterUser;
  loginUser: LoginUser;
  products: Array<Product>;
  response: ResponseData;
  canLogin: boolean;
  constructor(private serv: SecureCallService) {
    this.createUser = new RegisterUser("", "", "");
    this.loginUser = new LoginUser("", "");
    this.products = Array<Product>();
    this.response = new ResponseData("");
    this.canLogin = false;
  }

  ngOnInit() { }

  registerUser(): void {
    this.serv.registerUser(this.createUser).subscribe(resp => {
      this.response = resp;

      if (this.response.message.length !== 0) {
        this.canLogin = true;
      }
    });
  }

  authenticateUser(): void {
    this.serv.authenticateUser(this.loginUser).subscribe(resp => {
      this.response = resp;
      console.log(resp);
      localStorage.setItem('token',this.response.message);
    });
  }

  getProducts(): void {
    if (this.response.message.length !== 0) {
      this.serv.getProducts(this.response.message).subscribe(resp => {
        this.products = resp;
      });
    }
  }
  clearRegisterInfo(): void {
    this.createUser = new RegisterUser("", "", "");
  }
  clearLoginInfo(): void {
    this.loginUser = new LoginUser("", "");
  }
}