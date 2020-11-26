﻿"use strict";

/*
Реализовать калькулятор, в котором есть слайдер
(input type="range") и поле ввода (input type="number").
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

const RANGE = "[type='range']";
const NUMBER = "[type='number']";
// функция принимает selector(тип string), возвращает элемент из DOM
const getElemFromDOM = (selector) => {
  return document.querySelector(selector);
}

// функция принимает selector(тип string), возвращает значение элемента из DOM
const getValueFromDOM = (selector) => {
  return getElemFromDOM(selector).value;
}

// хранит элемент с флажком range
const range = getElemFromDOM(RANGE);
// функция при изменении состояния range - меняет состояние поля ввода number
range.oninput = () => getElemFromDOM(NUMBER).value = range.value;

// хранит элемент с полем ввода number
const number = getElemFromDOM(NUMBER);
// функция при изменении состояния поля ввода number - меняет состояние range
number.onchange = () => getElemFromDOM(RANGE).value = number.value;

// функция уст. высоту блоков диаграммы и возвращает массив этих значений
const setHeightBloks = () => {
	let comission,
			credit = Number(getValueFromDOM(NUMBER));

	if(credit < 20) {
		comission = 2;
	} else if(credit >= 20 && credit < 50) {
		comission = 4;
	} else if(credit >= 50 && credit < 75) {
		comission = 6;
	} else {
		comission = 8;
	}

	let greenBlock = getElemFromDOM(".green"),
			redBlock = getElemFromDOM(".red");

	redBlock.style.height = `${comission}px`;
	greenBlock.style.height = `${credit}px`;

	return [greenBlock.style.height, redBlock.style.height];
}

// отрисовка элементов блок-диаграммы
const render = () => {
	document.querySelector(RANGE).addEventListener("input", function() {
		setHeightBloks();
	});
	document.querySelector(NUMBER).addEventListener("change", function() {
		setHeightBloks();
	});
}

render();