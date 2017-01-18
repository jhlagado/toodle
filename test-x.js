export default function () {

	x = (a) => 123;

	console.log('is a function');
	console.assert(typeof x === 'function');

	console.log('invoked');
	console.assert(x() === 123);
}