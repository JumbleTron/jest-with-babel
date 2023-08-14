export default class Basket {
	constructor() {
		this.products = [];
	}

	addProduct(product) {
		this.products.push(product);
	}

	removeProduct(name) {
		this.products = this.products.filter((value) => value.name !== name);
	}

	getTotal() {
		return this.products.reduce((sum, product) => {
			if (product.hasOwnProperty('price')) {
				return sum + product.price;
			}
			return sum;
		}, 0)
	}

	getTotalVat() {
		return this.products.reduce((sum, product) => {
			if (typeof product.getVat === 'function') {
				return sum + product.getVat();
			}
			return sum;
		}, 0)
	}

	getTotalWithVat() {
		return this.products.reduce((sum, product) => {
			if (typeof product.getPriceWithVat === 'function') {
				return sum + product.getPriceWithVat();
			}
			return sum;
		}, 0)
	}
}
