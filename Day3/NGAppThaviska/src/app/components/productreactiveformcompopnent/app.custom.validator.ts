import { AbstractControl } from '@angular/forms';
import { Logic } from '../../models/app.logic';
import { Product } from '../../models/app.product';

// custom validator class must contain static metyhod
export class MyCustomValidator {
  // if the method is validated
  // then it will return null
  // else it will retun JSON object for
  // invalidation
  // AbstractControl --> represents HTML UI element
  // on which the validations are applied
  
  static checkEven(ctrl: AbstractControl) : any {
     const val: number  = parseInt(ctrl.value);
     if (val % 2 === 0) {
        return null;
     } else {
       return {noteven:true}
     }
  }

  static checkUnique(ctrl: AbstractControl): any {
    const val: number = parseInt(ctrl.value);
    let products: Array<Product> = new Array<Product>();
    let logic: Logic = new Logic();
    products = logic.getProducts();
    for(let prd of products)
    {
      if(prd.ProductId === val)
        return {isUnique:false}
    }
    return null;
  }
}
