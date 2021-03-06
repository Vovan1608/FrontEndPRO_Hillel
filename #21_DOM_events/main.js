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

const types = {range: "[type='range']", number: "[type='number']"};

// функция принимает selector(тип string), возвращает элемент из DOM
const getElemFromDOM = (selector) => document.querySelector(selector);

// функция принимает selector(тип string), возвращает значение элемента из DOM
const getValueFromDOM = (selector) => getElemFromDOM(selector).value;

// функция при изменении состояния поля range меняет состояние поля ввода number и наоборот
const changeStateInputField = () => {
  const {range, number} = types;
  const inputs = document.querySelectorAll(".input");

  for(const input of inputs) {

    if(input.type === "range") {
      input.addEventListener("input", () => {
        getElemFromDOM(number).value = getValueFromDOM(range);
      });
    } else {
      input.addEventListener("change", () => {
        getElemFromDOM(range).value = getValueFromDOM(number);
      });
    }
  }
}

// функцю. возвр. объект значений блоков по высоте
const getHeightBloks = () => {
  const {range, number} = types;
  let comission,
      credit = Number(getValueFromDOM(number));

  if(credit < 20) {
    comission = 2;
  } else if(credit >= 20 && credit < 50) {
    comission = 4;
  } else if(credit >= 50 && credit < 75) {
    comission = 6;
  } else {
    comission = 8;
  }
  return {credit, comission};
}

// функция уст. высоту блоков
const setHeightBlocks = () => {
  // деструктуризация объекта более устойчива
  const {credit, comission} = getHeightBloks();

  getElemFromDOM(".red").style.height = `${comission}px`;
  getElemFromDOM(".green").style.height = `${credit}px`;
}

// отрисовка элементов блок-диаграммы
const render = () => {
  const {range, number} = types;
  changeStateInputField();

  getElemFromDOM(range).addEventListener("input", function() {
    setHeightBlocks();
  });
  getElemFromDOM(number).addEventListener("change", function() {
    setHeightBlocks();
  });
}

render();