import { additiveMergeDeep } from '../src/additiveMergeDeep';

describe('AdditiveMergeDeep', () => {
	it('should properly add values of different types', () => {
		const actualObj: any = {
			A: 5,
			B: 'part1',
			C: true,
			D: [1, 3],
			E: {
				val: 10,
			},
			F: 25
		};
		const addValuesObj: any = {
			A: 10,
			B: '-part2',
			C: false,
			D: [5, 6],
			E: {
				val: 2,
				score: 1,
			},
			G: { amount: 10 }
		};
		const expectedObject: any = {
			A: 15,
			B: 'part1-part2',
			C: false,
			D: [1, 3, 5, 6],
			E: {
				val: 12,
				score: 1,
			},
			F: 25,
			G: { amount: 10 }
		};

		additiveMergeDeep(actualObj, addValuesObj);

		expect(actualObj.A).toEqual(expectedObject.A);
		expect(actualObj.B).toEqual(expectedObject.B);
		expect(actualObj.C).toEqual(expectedObject.C);
		expect(actualObj.D).toEqual(expectedObject.D);
		expect(actualObj.E.val).toEqual(expectedObject.E.val);
		expect(actualObj.E.score).toEqual(expectedObject.E.score);
		expect(actualObj.F).toEqual(expectedObject.F);
		expect(actualObj.G).toEqual(expectedObject.G);
	});
});
