import { forEach } from "./forEach";

/**
 * Return the differences of numeric values between 2 objects of the same type.
 *
 * @param base The base object to compare with
 * @param compared The object compared to the base one
 * @returns An object containing the numeric values differences between the base object and the compared object
 */
export function numericDiff(base: {[key: string]: any}, compared: {[key: string]: any}): {[key: string]: any} {
	const diff: {[key: string]: any} = {};

	forEach(Object.keys(compared), (key) => {
		if (typeof compared[key] === 'number') {
			diff[key] = compared[key] - (typeof base[key] === 'number' ? base[key] : 0);
		}
	});

	return diff;
}
