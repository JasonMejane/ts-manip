import { splitIntoMultiple } from '../src/splitIntoMultiple';

describe('SplitIntoMultiple', () => {
	it('should return an array containing one array when length <= maxLength', () => {
		const arr = [1, 2, 3, 4, 5];
		const expectedArr = [[1, 2, 3, 4, 5]];

		const actualArr = splitIntoMultiple(arr, 5);

		expect(actualArr).toEqual(expectedArr);
	});

	it('should return an array containing 3 arrays when length > 2 * maxLength', () => {
		const arr = [1, 2, 3, 4, 5];
		const expectedArr = [[1, 2], [3, 4], [5]];

		const actualArr = splitIntoMultiple(arr, 2);

		expect(actualArr).toEqual(expectedArr);
	});

	it('should return an empty array if the array is empty', () => {
		const arr: any[] = [];
		const expectedArr: any[] = [];

		const actualArr = splitIntoMultiple(arr, 10);

		expect(actualArr).toEqual(expectedArr);
	});
});
