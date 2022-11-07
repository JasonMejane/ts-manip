/**
 * Iterates over elements of an array and invoke a function for each element.
 *
 * @param array The array to go through
 * @param iteratee The function to invoke for each element
 */
export function forEach<T, U>(array: T[], iteratee: (element: T, index: number) => U): void {
	const length = array?.length - 1 ?? -1;

	let i = -1;
	while (i++ < length) {
		iteratee(array[i], i);
	}
}
