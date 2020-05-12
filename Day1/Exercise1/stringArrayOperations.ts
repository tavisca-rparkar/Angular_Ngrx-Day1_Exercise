export class StringArrayOperations {
    products : Array<Product>;

    sortNamesByLength(products: Array<Product>): Array<Product> {
		this.products = products;
        return this.products.sort((a,b) => {
            return a.ProductName.localeCompare(b.ProductName);
        });
    }

    reverseNames(products: Array<Product>): Array<Product> {
		this.products = products;
        return this.products.reverse();
    }
}