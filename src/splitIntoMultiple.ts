/**
 * Split an array into an array of arrays of length <= to a given max length.
 *
 * @param array The array to split into smaller ones
 * @param maxLength The max length of a splitted array
 * @returns An array containing the splitted arrays
 */
export function splitIntoMultiple<T>(array: T[], maxLength: number): T[][] {
	const length = array?.length ?? 0;

	if (!length) {
		return [];
	}

	return length <= maxLength
		? [array]
		: [array.slice(0, maxLength), ... splitIntoMultiple(array.slice(maxLength), maxLength)];
}
