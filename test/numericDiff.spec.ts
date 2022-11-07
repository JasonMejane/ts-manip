import { numericDiff } from '../src/numericDiff';

describe('NumericDiff', () => {
	it('should return the proper numeric difference', () => {
		const baseObj = {
			scoreA: 0,
			scoreB: 10,
			scoreC: -25,
		};
		const comparedObj = {
			scoreA: -5,
			scoreC: 12,
		};
		const expectedDiff = {
			scoreA: -5,
			scoreC: 37,
		};

		const actualDiff = numericDiff(baseObj, comparedObj);

		expect(actualDiff.scoreA).toEqual(expectedDiff.scoreA);
		expect(actualDiff.scoreB).toEqual(undefined);
		expect(actualDiff.scoreC).toEqual(expectedDiff.scoreC);
	});

	it('should ignore non-numeric values', () => {
		const baseObj = {
			scoreA: 0,
			scoreB: 10,
			scoreC: -25,
			scoreD: 'aaa'
		};
		const comparedObj = {
			scoreA: -5,
			scoreC: 12,
		};
		const expectedDiff = {
			scoreA: -5,
			scoreC: 37,
		};

		const actualDiff = numericDiff(baseObj, comparedObj);

		expect(actualDiff.scoreA).toEqual(expectedDiff.scoreA);
		expect(actualDiff.scoreB).toEqual(undefined);
		expect(actualDiff.scoreC).toEqual(expectedDiff.scoreC);
		expect(actualDiff.scoreD).toEqual(undefined);
	});

	it('should handle non-numeric base value', () => {
		const baseObj = {
			scoreA: 0,
			scoreB: 10,
			scoreC: -25,
			scoreD: 'aaa'
		};
		const comparedObj = {
			scoreA: -5,
			scoreC: 12,
			scoreD: 100
		};
		const expectedDiff = {
			scoreA: -5,
			scoreC: 37,
			scoreD: 100
		};

		const actualDiff = numericDiff(baseObj, comparedObj);

		expect(actualDiff.scoreA).toEqual(expectedDiff.scoreA);
		expect(actualDiff.scoreB).toEqual(undefined);
		expect(actualDiff.scoreC).toEqual(expectedDiff.scoreC);
		expect(actualDiff.scoreD).toEqual(expectedDiff.scoreD);
	});
});
