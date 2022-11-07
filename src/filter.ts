/**
 * Filter elements of an array.
 *
 * @param array The array to filter
 * @param predicate The predicate to be used to determine if an element should be kept or not
 * @returns The filtered array
 */
export function filter<T>(array: T[], predicate: (element: T, index: number) => boolean): T[] {
	const length = array?.length - 1 ?? -1;
	const newArray: T[] = [];

	let i = -1;
	while (i++ < length) {
		if (predicate(array[i], i)) {
			newArray.push(array[i]);
		}
	}

	return newArray;
}
