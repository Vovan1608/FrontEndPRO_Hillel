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
	let valueOfRange = document.querySelector("#range"),  // object inputRange
			valueOfInput = document.querySelector("#number"); // object inputNumber
	return valueOfInput.value = valueOfRange.value;
}

const setValRangeFlag = () => {
	let valueOfRange = document.querySelector("#range"),  // object inputRange
			valueOfInput = document.querySelector("#number"); // object inputNumber
	return valueOfRange.value = valueOfInput.value;
}
// функция возвращает коллекцию детей (блоки 'nothing', 'comission', 'credit')
const arrayNothingCreditComission = () => document.querySelector(".visual-box").children;