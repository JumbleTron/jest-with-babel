export default class Product {
	constructor(name, description, price) {
		this.name = name;
		this.description = description;
		this.price = price;
	}

	getVat() {
		return this.price * 0.23;
	}

	getPriceWithVat() {
		return this.price * 1.23;
	}
}
