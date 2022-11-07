/**
 * Map an array to another, thanks to a tranform function, filtering the elements to keep thanks to a predicate function.
 *
 * @param array The array to transform
 * @param transform The transform function to apply to each element
 * @param predicate The predicate function to filter elements
 * @returns The array of transformed elements
 */
 export function filteredMap<T, U>(array: T[], transform: (element: T, index: number) => U, predicate: (element: T, index: number) => boolean): U[] {
	const length = array?.length - 1 ?? -1;
	const newArray: U[] = [];

	let i = -1;
	while (i++ < length) {
		if (predicate(array[i], i)) {
			newArray.push(transform(array[i], i));
		}
	}

	return newArray;
}
