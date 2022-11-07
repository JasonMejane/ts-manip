/**
 * Reduce an array to a new single value, thanks to a tranform function.
 *
 * @param array The array to reduce
 * @param iteratee The function to apply to each element
 * @returns The reduced result
 */
export function reduce<T>(array: T[], iteratee: (accumulator: T, current: T, index: number, array: T[]) => T, initialValue?: T): T {
	const length = array?.length - 1 ?? -1;
	let accumulator: any = initialValue ?? 0;
	let i = -1;

	if (!initialValue && typeof array[0] !== 'number') {
		accumulator = array[++i];
	}

	while (i++ < length) {
		accumulator = iteratee(accumulator, array[i], i, array);
	}

	return accumulator;
}
