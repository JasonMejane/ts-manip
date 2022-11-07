import { forEachAsync } from '../src/forEachAsync';

describe('ForEachAsync', () => {
	it('should go through an array', async () => {
		const arr = ['aaa', 'bbb', 'ccc'];

		spyOn(console, 'log').and.stub();

		await forEachAsync(arr, async (el, index) => {
			console.log(index);
		});

		expect(console.log).toHaveBeenCalledTimes(3);
	});

	it('should properly use index', async () => {
		const arr = ['aaa', 'bbb', 'ccc'];

		spyOn(console, 'log').and.stub();

		await forEachAsync(arr, async (el, index) => {
			if (index < 2) {
				console.log(index);
			}
		});

		expect(console.log).toHaveBeenCalledTimes(2);
	});

	it('should do nothing if the array is empty', async () => {
		const arr: any[] = [];

		spyOn(console, 'log').and.stub();

		await forEachAsync(arr, async (el, index) => {
			console.log(index);
		});

		expect(console.log).toHaveBeenCalledTimes(0);
	});
});
