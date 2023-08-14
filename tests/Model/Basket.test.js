import Basket from "../../src/Model/Basket";
import Product from "../../src/Model/Product";
import DiscountCoupon, { getDiscountMock } from "../../src/Model/DiscountCoupon";

jest.mock('../../src/Model/DiscountCoupon');
jest.mock('../../src/Model/Product', () => {
	return jest.fn().mockImplementation(() => {
		return {
			getVat: jest.fn().mockReturnValue(0.23)
			//getVat: jest.fn().mockReturnValueOnce(0.23).mockReturnValueOnce(1) //first and second execute
		}
	})
});

beforeEach(() => {
	Product.mockClear();
});

it('Check total vat', () => {
	const basket = new Basket();
	const product = new Product('Test', 500);
	basket.addProduct(product);
	basket.addProduct(product);
	expect(basket.getTotalVat()).toEqual(0.46);
	//expect(Product.mock.instances[0].getVat).toHaveBeenCalledTimes(1);
	expect(jest.spyOn(product, 'getVat')).toHaveBeenCalledTimes(2);
});

it('Check apply discount coupon', () => {
	const basket = new Basket();
	const product = new Product('Test', 500);
	basket.addProduct(product);
	expect(DiscountCoupon).toHaveBeenCalledTimes(0);
	basket.applyDiscount('testing');
	expect(DiscountCoupon).toHaveBeenCalledTimes(1);
	expect(basket.getBasketTotal()).toEqual(250);
	expect(getDiscountMock).toHaveBeenCalledTimes(1)
});
