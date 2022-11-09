import { flattenDeep } from '../src/flattenDeep';

describe('FlattenDeep', () => {
	it('should flatten an array with a transform', () => {
		const arr = ['aaa', ['bbb', 'ccc']];
		const expectedArr = ['aaa1', 'bbb1', 'ccc1'];

		const actualArr = flattenDeep(arr, undefined, (el) => { return `${el}1`; });

		expect(actualArr).toEqual(expectedArr);
	});

	it('should flatten an array without transform', () => {
		const arr = ['aaa', ['bbb', 'ccc']];
		const expectedArr = ['aaa', 'bbb', 'ccc'];

		const actualArr = flattenDeep(arr);

		expect(actualArr).toEqual(expectedArr);
	});

	it('should flatten deeply an array', () => {
		const arr = ['aaa', ['bbb', ['ccc', 'ddd']]];
		const expectedArr = ['aaa', 'bbb', 'ccc', 'ddd'];

		const actualArr = flattenDeep(arr);

		expect(actualArr).toEqual(expectedArr);
	});

	it('should flatten an array up to the given max depth', () => {
		const arr = ['aaa', ['bbb', ['ccc', 'ddd']]];
		const expectedArr = ['aaa', 'bbb', ['ccc', 'ddd']];

		const actualArr = flattenDeep(arr, 1, undefined);

		expect(actualArr).toEqual(expectedArr);
	});

	it('should properly use index', () => {
		const arr = ['aaa', ['bbb', 'ccc']];
		const expectedArr = ['aaa1', 'bbb1', 'ccc2'];

		const actualArr = flattenDeep(arr, undefined, (el, index) => { return `${el}${index + 1}`; });

		expect(actualArr).toEqual(expectedArr);
	});

	it('should return an empty array if the array is empty', () => {
		const arr: any[] = [];
		const expectedArr: any[] = [];

		const actualArr = flattenDeep(arr, undefined, (el) => { return { id: `${el.id}1`, type: el.type }; });

		expect(actualArr).toEqual(expectedArr);
	});
});
