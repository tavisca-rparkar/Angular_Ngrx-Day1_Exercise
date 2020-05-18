import { Customer } from './app.customer';
import { Order } from './app.order';
import { Customers,Orders } from './app.constants';

export class Logic {
    private customers: Array<Customer>;
    private orders: Array<Order>;
    private customerList = Customers;
    private orderList = Orders;
    constructor(){
      this.customers = new Array<Customer>();
      this.orders = new Array<Order>();
      this.customerList.forEach((p,i)=> {
         this.customers.push(
           new Customer(p.CustomerId, p.CustomerName, p.City, p.Email, p.ContactNumber)
         );
      });
      this.orderList.forEach((p,i)=> {
         this.orders.push(
           new Order(p.OrderId, p.OrderName, p.Date, p.CustomerId, p.Quantity, p.Amount)
         );
      });
    }

    getCustomers(): Array<Customer> {
      return this.customers;
    }

    getOrders(): Array<Order> {
        return this.orders;
    }
}