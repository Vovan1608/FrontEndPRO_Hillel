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

// функция склеивает значение высоты блока-диаграммы со значением комиссии
// возвращает массив стилей для блока-диаграммы
const getValueHeightBlocks = () => {
	// массив элементов блок-диаграммы
	const [nothing, redBlock, greenBlock] = getElementsAsArray("block");

	// массив с текущим значением credit и comission
	const [credit, comission] = setHeightBloks("input");

	greenBlock.style.height = `${comission}px`;
	redBlock.style.height = `${credit}px`;

	return [greenBlock.style.height, redBlock.style.height];
}

// отрисовка элементов блок-диаграммы
const render = () => {
	// берем элемент с классом input_container(содержит input-ы)
	// вешаем событие mousemove (при движении флажка в <input type="range">)
	document.querySelector(".input_container").addEventListener("mousemove", function() {
		// массив элементов input
		const [inpFromRange, inpFromNum] = getElementsAsArray("input");
		inpFromRange.oninput = setValInputNum('input');
		getValueHeightBlocks();
	});
	// берем элемент с классом input_container(содержит input-ы)
	// вешаем событие click (при нажатии стрелок в <input type="number">)
	document.querySelector(".input_container").addEventListener("click", function() {
		const [inpFromRange, inpFromNum] = getElementsAsArray("input");
		inpFromNum.oninput = setValRangeFlag('input');
		getValueHeightBlocks();
	});
}

render();