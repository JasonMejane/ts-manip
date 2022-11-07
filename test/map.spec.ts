import { map } from './../src/map';

describe('Map', () => {
	it('should map an array', () => {
		const arr = ['aaa', 'bbb', 'ccc'];
		const expectedArr = ['aaa1', 'bbb1', 'ccc1'];

		const actualArr = map(arr, (el) => { return `${el}1`; });

		expect(actualArr).toEqual(expectedArr);
	});

	it('should properly use index', () => {
		const arr = ['aaa', 'bbb', 'ccc'];
		const expectedArr = ['aaa1', 'bbb2', 'ccc3'];

		const actualArr = map(arr, (el, index) => { return `${el}${index + 1}`; });

		expect(actualArr).toEqual(expectedArr);
	});

	it('should return an empty array if the array is empty', () => {
		const arr: any[] = [];
		const expectedArr: any[] = [];

		const actualArr = map(arr, (el) => { return { id: `${el.id}1`, type: el.type }; });

		expect(actualArr).toEqual(expectedArr);
	});
});
