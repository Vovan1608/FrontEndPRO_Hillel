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
		button.innerText = "click";
		button.classList.add("btn");
		const tablo = document.createElement("button");
		tablo.innerText = 0;
		tablo.classList.add("tablo");
		return {container, button, tablo};
	}
	// функция создает блок с необходимым кол-вом контейнеров
	const createBlock = () => {
		const mainContainer = document.querySelector("#main");
		const fragment = document.createDocumentFragment();
		const numOfConteiners = 2;
		for(let i = 0; i < numOfConteiners; i += 1) {
			const {container, button, tablo} = createElementForBlock();
			container.append(button, tablo);
			fragment.append(container);
		}

		mainContainer.append(fragment);
	}
	
	createBlock();
}