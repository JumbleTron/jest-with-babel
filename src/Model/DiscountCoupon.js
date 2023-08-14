export default class DiscountCoupon {
	constructor(name, discountType, discountAmount) {
		if (!['amount', 'percent'].includes(discountType)) {
			throw new Error(`Invalid coupon type: ${discountType}`);
		}

		this.name = name;
		this.discountType = discountType;
		this.discountAmount = discountAmount;
	}

	getDiscount(amountInBasket) {
		if (this.discountType === 'amount') {
			return this.discountAmount;
		}

		const percent = this.discountAmount >= 1 ? this.discountAmount/100 : this.discountAmount;
		return amountInBasket * (1 - percent)
	}
}
