export const getDiscountMock = jest.fn().mockReturnValue(250);
const mock = jest.fn().mockImplementation(() => {
	return {
		getDiscount: getDiscountMock,
		discountType: 'amount'
	};
});

export default mock;
