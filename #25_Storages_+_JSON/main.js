"use strict";

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
		button.classList.add("btn");
		button.setAttribute("data-counter", "click");
		const tablo = document.createElement("button");
		tablo.classList.add("tablo");
		return {container, button, tablo};
	}

	// функция создает кнопки ClearCounters и SetCounter
	const creatSetClearButtons = () => {
		// данные для создания кнопок ClearCounters и SetCounter
		const buttons = [
			{button: "ClearCounters", button_data: "data-clear", data_value: "clear"}, 
			{button: "SetCounter", button_data: "data-set", data_value: "setCount"}
		];

		const containerClearSetButton = [];
		buttons.forEach(item => {
			const buttn = document.createElement("button");
			buttn.innerText = item.button;
			buttn.setAttribute(item.button_data, item.data_value);
			containerClearSetButton.push(buttn);
		});
		return containerClearSetButton;
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
			button.innerText = `click_${i + 1}`;
			// уникальные id для контейнеров
			button.setAttribute("id", `id_${i + 1}`);
			// При перезагрузке страницы counter сохраняется, если добавили новый контейнер , то counter = 0
			tablo.innerText = localStorage.getItem(`id_${i + 1}`) || 0;
			container.append(button, tablo);
			fragment.append(container);
		}
		const [clearButton, setCounterButton] = creatSetClearButtons();
		mainBlock.append(fragment, clearButton, setCounterButton);
	}
	// нарисовали блок со всеми кнопками и табло
	createBlock();

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
		// получаем результат счетчика
		const tabloValue = countUp(event);
		// получаем id кнопки "click"
		const buttonID = event.target.id;
		// сохраняем в localStorage значение
		localStorage.setItem(buttonID, tabloValue);
	}

	// коллекция кнопок click
	const buttons = document.querySelectorAll(".btn");

	// обработчик для очистки
	const clearAll = () => {
		// обнуляем поля счетчика
		buttons.forEach( item => item.nextSibling.innerText = 0);
		// очищаем localStorage
		localStorage.clear();
	}

	const isCorrectNumber = (value) => {
		if(isNaN(value) || value === null || value === "" || typeof value === "string") {
			return false;
		} else {
			return true;
		}
	}
	// обработчик для установки значения в табло
	const setCounter = () => {
		const callID = Number(prompt("Введите номер контейнера", 1));
		
		if(isCorrectNumber(callID) && callID > 0 && callID <= buttons.length) {
			// получил блок
			const block = document.querySelector(`#id_${callID}`);
			// получил доступ к табло
			const tablo = block.nextSibling;
			// значение для табло
			const tabloValue = Number( prompt("Какое значение установить счетчику?", "5") );
			
			if(isCorrectNumber(tabloValue)) {
				// меняем на табло
				tablo.innerText = tabloValue;
				// меняем в localStorage
				localStorage.setItem(`id_${callID}`, tabloValue);
			} else {
				throw new Error("некорректное число");
			}
		} else {
			throw new Error("некорректное число");
		}
	}

	// один обработчик на все события
	const handlerForBlock = (event) => {
		if( event.target.getAttribute('data-clear') ) {
			return clearAll();
		} else if ( event.target.getAttribute('data-set') ) {
			return setCounter();
		} else if ( event.target.getAttribute('data-counter') ) {
			return setValueToLocalStorage(event);
		}
	}

	// навесил один слушатель на родителя
	const onListenerBlock = () => document.querySelector("#main").addEventListener("click", handlerForBlock);
	
	onListenerBlock();
}