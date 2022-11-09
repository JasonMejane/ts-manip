/**
 * Flatten deeply an array (or up to a given depth), and can transform elements thanks to an optional tranform function.
 *
 * @param array The array to flatten
 * @param maxDepth The max depth to flatten the array up to (optional - Infinity if undefined)
 * @param transform The transform function to apply to each element (optional - identity if undefined)
 * @returns The deeply flattened array of transformed elements
 */
 export function flattenDeep(
	array: any[],
	maxDepth: number = Infinity,
	transform: (element: any, index: number) => any = (element) => { return element; }
): any[] {
	const length = array?.length - 1 ?? -1;
	const newArray: any[] = [];

	let i = -1;
	while (i++ < length) {
		if (Array.isArray(array[i]) && array[i].length && maxDepth > 0) {
			newArray.push(...flattenDeep(array[i], maxDepth - 1, transform));
		} else {
			newArray.push(transform(array[i], i));
		}
	}

	return newArray;
}
