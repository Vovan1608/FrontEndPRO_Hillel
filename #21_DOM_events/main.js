"use strict";

/*
Реализовать калькулятор, в котором есть слайдер
(input type=”range”) и поле ввода (input type=”number”).
Изменяя состояние range меняется состояние поля ввода number. И наоборот.

Реализовать блок-диаграмму, который в пикселях будет отображать
значение range. Например - range выбрали число 83, высота
блока-диаграммы будет 83 пикселя.

Красный блок - количество комиссии. Комиссия вычисляется по формуле:
(range < 20) -> 2%
(20 - 50)  -> 4%
(50 - 75)  -> 6%
(75 - 100)  -> 8%
Красный блок отображает количество комиссии. Например Значение выбора
100, комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px
*/

// функция для получения эл-ов из DOM: принимает className(класс элемента) в виде string,
// возвр. массив данных
const getElementsAsArray = (className) => {
	const collectElem = document.querySelectorAll(`.${className}`);
	return [].slice.call(collectElem);
}

// функция принимает className(класс элемента) в виде string,
// возвращает в поле <input type="number"> значение <input type="range"> типа string
const setValInputNum = (className) => {
	const arrayValues = getElementsAsArray(className);
	return arrayValues[1].value = arrayValues[0].value;
}

// функция принимает className(класс элемента) в виде string,
// возвращает в поле <input type="range"> значение <input type="number"> типа string
const setValRangeFlag = (className) => {
	const arrayValues = getElementsAsArray(className);
	return arrayValues[0].value = arrayValues[1].value;
}

//функция принимает className(класс элемента) в виде string,
// возвращает массив значений комиссии и кредита 
const setHeightBloks = (className) => {
	let comission,
			credit,
			arraytOfValues = getElementsAsArray(className);
	credit = Number(arraytOfValues[1].value);

	if(credit < 20) {
		comission = 2;
	} else if(credit >= 20 && credit < 50) {
		comission = 4;
	} else if(credit >= 50 && credit < 75) {
		comission = 6;
	} else {
		comission = 8;
	}
	return [comission, credit];
}