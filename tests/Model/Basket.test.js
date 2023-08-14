import Basket from "../../src/Model/Basket";
import Product from "../../src/Model/Product";

jest.mock('../../src/Model/Product');

beforeEach(() => {
	Product.mockClear();
});

it('Check total vat', () => {
	const basket = new Basket();
	const product = new Product('Test', 500);
	basket.addProduct(product);
	basket.getTotalVat()
	expect(Product.mock.instances[0].getVat).toHaveBeenCalledTimes(1);
});
