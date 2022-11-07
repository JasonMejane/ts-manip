/**
 * Find the first matching element in an array.
 *
 * @param array The array to search
 * @param predicate The predicate to be used to determine the element to find
 * @returns The first matching element found in the array, or undefined if no matching element found
 */
 export function findFirst<T>(array: T[], predicate: (element: T, index: number) => boolean): T | undefined {
	const length = array?.length - 1 ?? -1;

	let i = -1;
	while (i++ < length) {
		if (predicate(array[i], i)) {
			return array[i];
		}
	}

	return undefined;
}
