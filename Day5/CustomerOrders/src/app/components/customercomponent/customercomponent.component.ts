import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/app.customer';
import { Order } from '../../models/app.order';
import { Logic } from '../../models/app.logic';
import { CommunicatorService } from 'src/app/services/app.communicator.service';

@Component({
  selector: 'app-customercomponent',
  templateUrl: './customercomponent.component.html',
  styleUrls: ['./customercomponent.component.css']
})
export class CustomercomponentComponent implements OnInit {
  customer: Customer;
  customers: Array<Customer>;
  headers: Array<string>;
  private logic: Logic;

  constructor(private communicatorService: CommunicatorService) { 
    this.customer = new Customer(0,"","","","");
    this.customers = new Array<Customer>();
    this.headers = new Array<string>();
    this.logic = new Logic();
  }

  ngOnInit(): void {
    this.customers = this.logic.getCustomers();
    for(let c in this.customer)
    {
      this.headers.push(c);
    }
  }

  emitSelectedCustomer(cust: Customer){
    this.communicatorService.getSelectedCustomer(cust.CustomerId);
  }

}
