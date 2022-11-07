import { filteredMap } from '../src/filteredMap';

describe('FilteredMap', () => {
	it('should map an array with predicate', () => {
		const arr = [{ id: 'aaa', type: 'a' }, { id: 'bbb', type: 'b' }, { id: 'ccc', type: 'a' }];
		const expectedArr = [{ id: 'aaa1', type: 'a' }, { id: 'ccc1', type: 'a' }];

		const actualArr = filteredMap(arr, (el) => { return { id: `${el.id}1`, type: el.type }; }, (el) => { return el.type === 'a'; });

		expect(actualArr).toEqual(expectedArr);
	});

	it('should properly use index', () => {
		const arr = [{ id: 'aaa', type: 'a' }, { id: 'bbb', type: 'b' }, { id: 'ccc', type: 'a' }];
		const expectedArr = [{ id: 'aaa1', type: 'a' }, { id: 'ccc3', type: 'a' }];

		const actualArr = filteredMap(arr, (el, index) => { return { id: `${el.id}${index + 1}`, type: el.type }; }, (el) => { return el.type === 'a'; });

		expect(actualArr).toEqual(expectedArr);
	});

	it('should return an empty array if the array is empty', () => {
		const arr: any[] = [];
		const expectedArr: any[] = [];

		const actualArr = filteredMap(arr, (el) => { return { id: `${el.id}1`, type: el.type }; }, (el) => { return el.type === 'a'; });

		expect(actualArr).toEqual(expectedArr);
	});
});
