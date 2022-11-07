import { forEach } from "./forEach";

/**
 * Performe a deep additive merge on values of an object, on a (key, value) basis.
 * - If the value is a number, a sum will be performed.
 * - If the value is a string, strings will be concatened.
 * - If the value is a boolean, the value will be kept.
 * - If the value is an array, entries to add will be pushed into the base object's array.
 * - It the value is an object, the process will be executed recursively for this object.
 *
 * @param baseObject The base object onto which add values
 * @param addValuesObject The object containing the values to add on the base object
 */
export function additiveMergeDeep(baseObject: {[key: string]: any}, addValuesObject: {[key: string]: any}): void {
	forEach(Object.keys(addValuesObject), (key) => {
		if (typeof addValuesObject[key] === 'number') {
			baseObject[key] = (baseObject[key] ?? 0) + (addValuesObject[key] ?? 0);
		} else if (typeof addValuesObject[key] === 'string') {
			baseObject[key] = (baseObject[key] ?? '') + (addValuesObject[key] ?? '');
		} else if (typeof addValuesObject[key] === 'boolean') {
			baseObject[key] = addValuesObject[key] ?? false;
		} else if (Array.isArray(addValuesObject[key])) {
			const arr: any[] = baseObject?.[key] ?? [];
			arr.push(...addValuesObject[key]);
			baseObject[key] = arr;
		} else if (typeof addValuesObject[key] === 'object') {
			if (!baseObject[key]) {
				baseObject[key] = {};
			}
			additiveMergeDeep(baseObject[key], addValuesObject[key]);
		}
	});
}
