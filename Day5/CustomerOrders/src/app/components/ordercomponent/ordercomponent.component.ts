import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from 'src/app/services/app.communicator.service';
import { Order } from 'src/app/models/app.order';
import { Logic } from 'src/app/models/app.logic';

@Component({
  selector: 'app-ordercomponent',
  templateUrl: './ordercomponent.component.html',
  styleUrls: ['./ordercomponent.component.css']
})
export class OrdercomponentComponent implements OnInit {
  selectedCustomerId: number;
  searchedCustomerIds: Array<number>;
  order: Order;
  orders: Array<Order>;
  filteredOrders: Array<Order>;
  headers: Array<string>;
  private logic: Logic;

  constructor(private communicatorService: CommunicatorService) { 
    this.order = new Order(0,"","",0,0,0);
    this.orders = new Array<Order>();
    this.headers = new Array<string>();
    this.logic = new Logic();
  }

  ngOnInit(): void {
    this.communicatorService.selectedCustomerid.subscribe((customerId) => {
      this.selectedCustomerId = customerId;
      this.getFilteredOrders();
    });
    this.communicatorService.searchedCustomerInfo.subscribe((data) => {
      this.searchedCustomerIds = data;
      this.getFilteredOrdersForSearched();
    });
    this.orders = this.logic.getOrders();
    for(let c in this.order)
    {
      this.headers.push(c);
    }
  }

  getFilteredOrders(){
    this.filteredOrders = this.orders.filter((v,i) => {
      return v.CustomerId === this.selectedCustomerId;
    })
  }

  getFilteredOrdersForSearched() {
    console.log(this.searchedCustomerIds);
    this.filteredOrders = this.orders.filter((v,i) => {
      this.searchedCustomerIds.forEach((s,i) => {
        return s === v.CustomerId;
      })
    })
  }

}
