import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  selectedCustomerid: EventEmitter<number>;
  constructor() { 
    this.selectedCustomerid = new EventEmitter<number>();
  }

  getSelectedCustomer(customerId: number) {
    this.selectedCustomerid.emit(customerId);
  }
}
