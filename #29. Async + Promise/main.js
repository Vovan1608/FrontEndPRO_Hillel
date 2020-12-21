"use strict";

/* 
Используя цепочку Promise согласно таблицы http://prntscr.com/oxzs7j. 
Организовать вывод в консоль такой порядок цифр " 0 1 3 6 8 9 12 ", 
" 0 2 3 6 7 9 12". Где 0 - это значение которое выводится в сallback - ф-ии которая передается в Promise.

ЗАПОМНИТЬ:
если в then() возвращается 
-return throw Error();
-return new Promise((res, rej))
-return Promise.reject() | Promise.resolve()
-Exeption
ТО ПОЛЮБЛМУ ПОПАДАЕМ В БЛОК reject(2-ая часть следующего then())
*/

const promise = new Promise( (resolve, reject) => {
	const result = 1;
	console.log(0);

	return (!result) ? resolve(1) : reject(2);
});

promise
	.then((result) => {
		console.log(result, "res");
		return 3;
	},
	(result) => {
		console.log(result, "rej");
		return Promise.reject(3);
	})
	.then((result) => {
		console.log(result, "res");
		return 6;
	},
	(result) => {
		console.log(result, "rej");
		return Promise.reject(6); 
	})
	.then((result) => {
		console.log(result, "res");
		return 8; // -> 8
	},
	(result) => {
		console.log(result, "rej");
		return Promise.reject(7);
	})
	.then((result) => {
		console.log(result, "res");
		return 9;
	},
	(result) => {
		console.log(result, "rej");
		return Promise.reject(9);
	})
	.then((result) => {
		console.log(result, "res");
		return 12;
	},
	(result) => {
		console.log(result, "rej");
		return Promise.reject(12);
	})
	.then((result) => {
		console.log(result, "res");
	},
	(result) => {
		console.log(result, "rej");
	})