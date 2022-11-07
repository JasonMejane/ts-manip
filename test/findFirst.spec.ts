import { findFirst } from '../src/findFirst';

describe('FindFirst', () => {
	it('should find the first matching element of an array', () => {
		const arr = [{ id: 1, val: 'aaa' }, { id: 2, val: 'bbb' }, { id: 3, val: 'ccc' }, { id: 4, val: 'bbb' }, { id: 5, val: 'ddd' }];
		const expectedEl = { id: 2, val: 'bbb' };

		const actualEl = findFirst(arr, (el) => { return el.val === 'bbb'; });

		expect(actualEl).toEqual(expectedEl);
	});

	it('should properly use index', () => {
		const arr = [{ id: 1, val: 'aaa' }, { id: 2, val: 'bbb' }, { id: 3, val: 'ccc' }, { id: 4, val: 'bbb' }, { id: 5, val: 'ddd' }];
		const expectedEl = { id: 3, val: 'ccc' };

		const actualEl = findFirst(arr, (el, index) => { return index === 2; });

		expect(actualEl).toEqual(expectedEl);
	});

	it('should return undefined if no corresponding entry is found', () => {
		const arr = [{ id: 1, val: 'aaa' }, { id: 2, val: 'bbb' }, { id: 3, val: 'ccc' }, { id: 4, val: 'bbb' }, { id: 5, val: 'ddd' }];
		const expectedEl = undefined;

		const actualEl = findFirst(arr, (el) => { return el.val === 'eee'; });

		expect(actualEl).toEqual(expectedEl);
	});

	it('should find the last element of an array', () => {
		const arr = [{ id: 1, val: 'aaa' }, { id: 2, val: 'bbb' }, { id: 3, val: 'ccc' }, { id: 4, val: 'bbb' }, { id: 5, val: 'ddd' }];
		const expectedEl = { id: 5, val: 'ddd' };

		const actualEl = findFirst(arr, (el) => { return el.val === 'ddd'; });

		expect(actualEl).toEqual(expectedEl);
	});

	it('should return undefined if the array is empty', () => {
		const arr: any[] = [];
		const expectedEl = undefined;

		const actualEl = findFirst(arr, (el) => { return el.val === 'bbb'; });

		expect(actualEl).toEqual(expectedEl);
	});
});
