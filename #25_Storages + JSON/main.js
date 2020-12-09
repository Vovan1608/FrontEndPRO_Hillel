﻿"use strict";

/*
1. Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа).
При нажатии на Click - counter увеличивается. При перезагрузке страницы
counter должен сохраняться.

2. Создать кнопку ClearCounters()

3. Создать кнопку setCounter(), который запрашивает id блока и устанавливает
значение( в типе number ) в counter.
*/

window.onload = function() {
	// функция создает контейнер с кнопками и возвр. объект
	// с этими данными
	const createElementForBlock = () => {
		const container = document.createElement("div");
		container.classList.add("container");
		const button = document.createElement("button");
		button.innerText = "click";
		button.classList.add("btn");
		const tablo = document.createElement("button");
		tablo.classList.add("tablo");
		return {container, button, tablo};
	}
	// функция создает блок с необходимым кол-вом контейнеров
	const createBlock = () => {
		// основной блок в HTML в который будем все рисовать
		const mainBlock = document.querySelector("#main");

		const fragment = document.createDocumentFragment();
		// задаем кол-во контейнеров
		const numOfConteiners = 2;
		
		for(let i = 0; i < numOfConteiners; i += 1) {
			const {container, button, tablo} = createElementForBlock();
			// уникальные классы для контейнеров
			button.classList.add(`button_${i + 1}`);
			// При перезагрузке страницы counter сохраняtтся, если добавили новый контейнер , то counter = 0
			tablo.innerText = localStorage.getItem(`button_${i + 1}`) || 0;
			container.append(button, tablo);
			fragment.append(container);
		}
		mainBlock.append(fragment);
	}

	createBlock();
	
	const buttons = document.querySelectorAll(".btn");

	// возвращает значение счетчика
	const countUp = (event) => {
		// получаем доступ к полю счетчика
		const tablo = event.target.nextSibling;
		// меняем значение счетчика по клику
		tablo.innerText = Number(tablo.innerText) + 1;
		
		return tablo.innerText;
	}

	// обработчик для записи значения в localStorage
	const setValueToLocalStorage = (event) => {
		countUp(event);
		// получаем имена классов кнопки "click"
		const [btn, buttonNum] = event.target.classList;
		// сохраняем в localStorage значение 
		localStorage.setItem(buttonNum, countUp(event));
	}
	// навешиваем слушателей на каждую кнопку с click
	buttons.forEach( item => item.addEventListener("click", setValueToLocalStorage) );
}