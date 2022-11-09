/**
 * Group elements of an array, thanks to an iteratee.
 *
 * @param array The array to group elements from
 * @param iteratee
 * @returns
 */
 export function groupBy<T, U>(array: T[], iteratee: (element: T, index: number) => U): {[key: string]: T[]} {
	const length = array?.length - 1 ?? -1;
	const groupedArrays: {[key: string]: T[]} = {};

	let i = -1;
	while (i++ < length) {
		const key = <string>iteratee(array[i], i);

		if (groupedArrays[key]) {
			groupedArrays[key].push(array[i]);
		} else {
			groupedArrays[key] = [array[i]];
		}
	}

	return groupedArrays;
}
