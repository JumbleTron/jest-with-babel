import DiscountCoupon from "./DiscountCoupon";

export default class Basket {
	constructor() {
		this.products = [];
		this.discount = null;
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

	applyDiscount(couponName) {
		this.discount = new DiscountCoupon(couponName, 'amount', 50);
	}

	getBasketTotal() {
		if (this.discount !== null) {
			return this.discount.getDiscount(this.getTotal())
		}

		return this.getTotal();
	}
}
