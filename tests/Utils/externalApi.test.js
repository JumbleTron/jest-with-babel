import { reachExternalApi } from "../../src/Utils/externalApi";

it('returns data on success', async () => {
	global.fetch = jest.fn(() => Promise.resolve({
		json: () => Promise.resolve({ id: 5 })
	}));

	const data = await reachExternalApi();
	expect(data).toEqual({ id: 5 });
});

it('throws an error when the fetch fails', async () => {
	global.fetch = jest.fn(() => Promise.resolve({
		json: () => Promise.reject('api is down')
	}));

	await expect(reachExternalApi()).rejects.toMatch('api is down');
});
