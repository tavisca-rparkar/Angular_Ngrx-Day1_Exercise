export class Order{
    constructor(
        public OrderId: number,
        public OrderName: string,
        public Date: string,
        public CustomerId: number,
        public Quantity: number,
        public Amount: number
    ){}
}