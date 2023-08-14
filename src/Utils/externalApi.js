export const reachExternalApi = async () => {
	const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	return await result.json();
}
