/**
 * Map an array to another, thanks to a tranform function.
 *
 * @param array The array to transform
 * @param transform The transform function to apply to each element
 * @returns The array of transformed elements
 */
export function map<T, U>(array: T[], transform: (element: T, index: number) => U): U[] {
	const length = array?.length - 1 ?? -1;
	const newArray: U[] = [];

	let i = -1;
	while (i++ < length) {
		newArray.push(transform(array[i], i));
	}

	return newArray;
}
