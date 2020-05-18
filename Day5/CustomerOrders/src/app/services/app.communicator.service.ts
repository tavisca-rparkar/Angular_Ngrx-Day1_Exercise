import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  selectedCustomerid: EventEmitter<number>;
  searchedData: EventEmitter<string>;
  searchedCustomerInfo: EventEmitter<Array<number>>;
  constructor() { 
    this.selectedCustomerid = new EventEmitter<number>();
    this.searchedData = new EventEmitter<string>();
    this.searchedCustomerInfo = new EventEmitter<Array<number>>();
  }

  getSelectedCustomer(customerId: number) {
    this.selectedCustomerid.emit(customerId);
  }

  getSearchedData(data: string) {
    this.searchedData.emit(data);
  }

  getSelectedCustomerInfo(customerIds: Array<number>) {
    this.searchedCustomerInfo.emit(customerIds);
  }
}
