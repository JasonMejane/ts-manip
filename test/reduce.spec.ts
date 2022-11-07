import { reduce } from '../src/reduce';

describe('Reduce', () => {
	it('should reduce an array without initial value', () => {
		const arr = [1, 3, 5, 7];
		const expectedResult = 16;

		const actualResult = reduce(arr, (acc, current) => { return acc + current; });

		expect(actualResult).toEqual(expectedResult);
	});

	it('should reduce an array with an initial value', () => {
		const arr = [1, 3, 5, 7];
		const expectedResult = 105;

		const actualResult = reduce(arr, (acc, current) => { return acc * current; }, 1);

		expect(actualResult).toEqual(expectedResult);
	});

	it('should reduce an array of complex objects', () => {
		const arr = [{ type: 1, val: 5 }, { type: 1, val: 20 }, { type: 2, val: 2 }, { type: 1, val: 7 }];
		const expectedResult = { type: 1, val: 48 };

		const actualResult = reduce(
			arr,
			(acc, current) => {
				if (current.type === 1) {
					return { type: 1, val: acc.val + 1.5 * current.val };
				}

				return { type: 1, val: acc.val };
			},
			{ type: 1, val: 0 }
		);

		expect(actualResult).toEqual(expectedResult);
	});

	it('should reduce an array of complex objects without initial value', () => {
		const arr = [{ type: 1, val: 5 }, { type: 1, val: 20 }, { type: 2, val: 2 }, { type: 1, val: 7 }];
		const expectedResult = { type: 1, val: 45.5 };

		const actualResult = reduce(
			arr,
			(acc, current) => {
				if (current.type === 1) {
					return { type: 1, val: acc.val + 1.5 * current.val };
				}

				return { type: 1, val: acc.val };
			}
		);

		expect(actualResult).toEqual(expectedResult);
	});

	it('should properly use index', () => {
		const arr = [1, 2, 3, 4];
		const expectedResult = 40;

		const actualResult = reduce(arr, (acc, current, index) => { return acc + current * index; }, 20);

		expect(actualResult).toEqual(expectedResult);
	});
});
