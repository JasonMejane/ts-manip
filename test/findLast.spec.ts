import { findLast } from '../src/findLast';

describe('FindLast', () => {
	it('should find the last matching element of an array', () => {
		const arr = [{ id: 1, val: 'aaa' }, { id: 2, val: 'bbb' }, { id: 3, val: 'ccc' }, { id: 4, val: 'bbb' }, { id: 5, val: 'ddd' }];
		const expectedEl = { id: 4, val: 'bbb' };

		const actualEl = findLast(arr, (el) => { return el.val === 'bbb'; });

		expect(actualEl).toEqual(expectedEl);
	});

	it('should properly use index', () => {
		const arr = [{ id: 1, val: 'aaa' }, { id: 2, val: 'bbb' }, { id: 3, val: 'ccc' }, { id: 4, val: 'bbb' }, { id: 5, val: 'ddd' }];
		const expectedEl = { id: 3, val: 'ccc' };

		const actualEl = findLast(arr, (el, index) => { return index === 2; });

		expect(actualEl).toEqual(expectedEl);
	});

	it('should return undefined if no corresponding entry is found', () => {
		const arr = [{ id: 1, val: 'aaa' }, { id: 2, val: 'bbb' }, { id: 3, val: 'ccc' }, { id: 4, val: 'bbb' }, { id: 5, val: 'ddd' }];
		const expectedEl = undefined;

		const actualEl = findLast(arr, (el) => { return el.val === 'eee'; });

		expect(actualEl).toEqual(expectedEl);
	});

	it('should find the first element of an array', () => {
		const arr = [{ id: 1, val: 'aaa' }, { id: 2, val: 'bbb' }, { id: 3, val: 'ccc' }, { id: 4, val: 'bbb' }, { id: 5, val: 'ddd' }];
		const expectedEl = { id: 1, val: 'aaa' };

		const actualEl = findLast(arr, (el) => { return el.val === 'aaa'; });

		expect(actualEl).toEqual(expectedEl);
	});

	it('should return undefined if the array is empty', () => {
		const arr: any[] = [];
		const expectedEl = undefined;

		const actualEl = findLast(arr, (el) => { return el.val === 'bbb'; });

		expect(actualEl).toEqual(expectedEl);
	});
});
