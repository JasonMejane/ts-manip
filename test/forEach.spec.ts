import { forEach } from '../src/forEach';

describe('ForEach', () => {
	it('should go through an array', () => {
		const arr = ['aaa', 'bbb', 'ccc'];

		spyOn(console, 'log').and.stub();

		forEach(arr, (el, index) => {
			console.log(index);
		});

		expect(console.log).toHaveBeenCalledTimes(3);
	});

	it('should properly use index', () => {
		const arr = ['aaa', 'bbb', 'ccc'];

		spyOn(console, 'log').and.stub();

		forEach(arr, (el, index) => {
			if (index < 2) {
				console.log(index);
			}
		});

		expect(console.log).toHaveBeenCalledTimes(2);
	});

	it('should do nothing if the array is empty', () => {
		const arr: any[] = [];

		spyOn(console, 'log').and.stub();

		forEach(arr, (el, index) => {
			console.log(index);
		});

		expect(console.log).toHaveBeenCalledTimes(0);
	});
});
