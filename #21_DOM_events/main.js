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

// функция возвращает в поле <input type="number> значение <input type="range>" типа string
const setValInputNum = () => {
	let valueOfRange = document.querySelector(`#range`),  // object inputRange
			valueOfInput = document.querySelector("#number"); // object inputNumber
	return valueOfInput.value = valueOfRange.value;
}

const setValRangeFlag = () => {
	let valueOfRange = document.querySelector("#range"),  // object inputRange
			valueOfInput = document.querySelector("#number"); // object inputNumber
	return valueOfRange.value = valueOfInput.value;
}

// функция для получения эл-ов из DOM: принимает className(класс элемента) в виде string, возвр. коллекцию детей
const getElements = (className) => document.querySelector(`.${className}`).children;

// функция для конвертации коллеции в массив:принимает className(класс элемента) в виде string, возвр. массив значений
// применено одолжение метода у массивов
const convertCollectionToArray = (className) => [].slice.call(getElements(className)).map( (item) => item.value);

// 
const setHeightBloks = (className) => {
	let comission,
			credit,
			arraytOfValues = convertCollectionToArray(className);
	credit = arraytOfValues[1];
	
	if(credit < 20) {
		comission = 2;
	} else if(credit >= 20 && credit < 50) {
		comission = 4;
	} else if(credit >= 50 && credit < 75) {
		comission = 6;
	} else {
		comission = 8;
	}

	
}