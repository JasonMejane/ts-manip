/**
 * Iterates over elements of an array and invoke an asynchronous function for each element.
 *
 * @param array The array to go through
 * @param iteratee The async function to invoke for each element
 */
export async function forEachAsync<T, U>(array: T[], iteratee: (element: T, index: number) => Promise<U>): Promise<void> {
	const length = array?.length - 1 ?? -1;

	let i = -1;
	while (i++ < length) {
		await iteratee(array[i], i);
	}
}
