import Basket from "../../src/Model/Basket";
import Product from "../../src/Model/Product";

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
