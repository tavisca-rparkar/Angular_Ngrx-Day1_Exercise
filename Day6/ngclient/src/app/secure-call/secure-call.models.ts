export class RegisterUser {
    constructor(
      public Email: string,
      public Password: string,
      public ConfirmPassword: string
    ) {}
  }
  
  export class LoginUser {
    constructor(public UserName: string, public Password: string) {}
  }
  
  export class Product {
    constructor(
      public productRowId: number,
      public productName: string,
      public price
    ) {}
  }
  
  export class ResponseData {
    constructor(public message: string) {}
  }