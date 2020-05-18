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
  filteredCustomers: Array<Customer>;
  searchData: string;
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
    this.communicatorService.searchedData.subscribe((data) => {
      this.searchData = data;
      this.getsearchedDataInfo();
    });
    this.customers = this.logic.getCustomers();
    for(let c in this.customer)
    {
      this.headers.push(c);
    }
  }

  emitSelectedCustomer(cust: Customer){
    this.communicatorService.getSelectedCustomer(cust.CustomerId);
  }

  getsearchedDataInfo() {
    this.customers = this.customers.filter((v,i) => {
      return v.CustomerName === this.searchData || v.City === this.searchData;
    });
    var customerIds: Array<number>=[];
    this.customers.forEach((v,i) => {
      customerIds.push(v.CustomerId);
    })
    this.communicatorService.getSelectedCustomerInfo(customerIds);
  }
}
