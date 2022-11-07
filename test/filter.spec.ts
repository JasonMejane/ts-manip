import { filter } from '../src/filter';

describe('Filter', () => {
	it('should filter an array with predicate', () => {
		const arr = [{ id: 'aaa', type: 'a' }, { id: 'bbb', type: 'b' }, { id: 'ccc', type: 'a' }];
		const expectedArr = [{ id: 'aaa', type: 'a' }, { id: 'ccc', type: 'a' }];

		const actualArr = filter(arr, (el) => { return el.type === 'a'; });

		expect(actualArr).toEqual(expectedArr);
	});

	it('should properly use index', () => {
		const arr = [{ id: 'aaa', type: 'a' }, { id: 'bbb', type: 'b' }, { id: 'ccc', type: 'a' }];
		const expectedArr = [{ id: 'aaa', type: 'a' }, { id: 'bbb', type: 'b' }];

		const actualArr = filter(arr, (el, index) => { return index < 2; });

		expect(actualArr).toEqual(expectedArr);
	});

	it('should return an empty array if the array is empty', () => {
		const arr: any[] = [];
		const expectedArr: any[] = [];

		const actualArr = filter(arr, (el) => { return el.type === 'a'; });

		expect(actualArr).toEqual(expectedArr);
	});
});
