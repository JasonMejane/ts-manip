import { groupBy } from '../src/groupBy';

describe('GroupBy', () => {
	it('should group an array (true/false iteratee)', () => {
		const arr = [{ id: 1, score: 25 }, { id: 2, score: 15 }, { id: 3, score: 35 }];
		const expected = { true: [{ id: 1, score: 25 }, { id: 3, score: 35 }], false: [{ id: 2, score: 15 }] };

		const actual = groupBy(arr, (el) => { return el.score >= 20; });

		expect(actual).toEqual(expected);
	});

	it('should group an array (varying iteratee)', () => {
		const arr = [{ id: 1, score: 2.5 }, { id: 2, score: 1.97 }, { id: 3, score: 3.7 }];
		const expected = { 1: [{ id: 2, score: 1.97 }], 2: [{ id: 1, score: 2.5 }], 3: [{ id: 3, score: 3.7 }] };

		const actual = groupBy(arr, (el) => { return Math.floor(el.score); });

		expect(actual).toEqual(expected);
	});

	it('should return an empty object if the array is empty', () => {
		const arr: any[] = [];
		const expected = {};

		const actual = groupBy(arr, (el) => { return { id: `${el.id}1`, type: el.type }; });

		expect(actual).toEqual(expected);
	});
});
