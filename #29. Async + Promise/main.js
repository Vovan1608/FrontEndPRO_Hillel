"use strict";
/* 
Используя цепочку Promise согласно таблицы http://prntscr.com/oxzs7j. 
Организовать вывод в консоль такой порядок цифр " 0 1 3 6 8 9 12 ", 
" 0 2 3 6 7 9 12". Где 0 - это значение которое выводится в сallback - ф-ии которая передается в Promise.
*/

const callback = () => 0;

const promise = new Promise( (callback) => {
	console.log(0);

	(!callback()) ? resolve() : reject();
});

promise
	.then(() => {
		const res = 1;
		console.log(res);
	},
	() => {
		const res = 2;
		console.log(res);
	})
	.then(() => {
		console.log(3);
	},
	() => {
		console.log(4);
	})
	.then(() => {
		console.log(5);
	},
	() => {
		console.log(6);
	})
	.then(() => {
		console.log(7);
	},
	() => {
		console.log(8);
	})
	.then(() => {
		console.log(9);
	},
	() => {
		console.log(10);
	})
	.then(() => {
		console.log(11);
	},
	() => {
		console.log(12);
	});