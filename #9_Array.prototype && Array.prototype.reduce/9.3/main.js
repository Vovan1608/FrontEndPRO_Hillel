"use strict";

/*
Самостоятельно реализовать метод Array.prototype.splice 
без использования стандартных метод Array.prototype 
(допускаются методы push,pop, shift, unshift)

Метод arr.splice(str) – Умеет всё: добавлять, удалять и заменять элементы

Метод splice() изменяет содержимое массива, удаляя существующие элементы 
и/или добавляя новые.
*/

function splice(array, start, deleteCount = 0) {
    start = getIndexForSplice(array, start);
    // deleteCount - сколько элементов удалить из массива; тут ограничение нужно для цикла, если вдруг число больше длины массива
    deleteCount = (arguments[2] <= array.length - start) ? getIndexForSplice(array, deleteCount) : array.length - start;
    // arrayDeletedVal - то,что функция возвращает (массив из удаленных элементов)
    let arrayDeletedVal = [],
        // arrayTempVal - значения, которые нужно сдвинуть 
        arrayTempVal = [],
        // index с которого начинаются элементы для вставки в псевдомассиве arguments
        startIncertElemInArg = 3,
        // длина оригинального массива
        originlArraySize = array.length,
        // кол-во элементов которые нужно вставить
        numOfIncertElem = arguments.length - startIncertElemInArg, 
        // кол-во итераций цикла
        numberOfIterations = (array.length - start <= numOfIncertElem) ? numOfIncertElem : array.length - start;
        console.log(numberOfIterations, "iter")
        // когда пройдут все итерации по заменам, потом цикл продолжится пока временный массив не станет пустым 
    for(let i = 0; i < numberOfIterations || Boolean(arrayTempVal.length) === true; i += 1) {
        
        if(i < numberOfIterations) {
            // 1-ый вариант, когда удаляем 0 и впихиваем 1 и более
            if(deleteCount === 0) {
                // если элемент есть
                if(array[i + start]) {
                    // Элементы уходят в массив значений для сдвига
                    arrayTempVal[arrayTempVal.length] = array[i + start];
                }
                //если есть элемент для вставки
                if(arguments[i + startIncertElemInArg]) {
                    // всовываем элемент 
                    array[i + start] = arguments[i + startIncertElemInArg];
                }
            }
            // 2-ой вариант, когда что-то удаляем, но ничего не вставляем
            if(deleteCount > 0 && numOfIncertElem === 0) {

                if(i < deleteCount) {
                    // элементы уходят в массив удаленных значений
                    arrayDeletedVal[arrayDeletedVal.length] = array[i + start];
                } else {
                    // Элементы уходят в массив значений для сдвига 
                    arrayTempVal[arrayTempVal.length] = array[i + start];
                }
            }
            // 3-ий вариант, когда что-то удаляем и что-то всовываем
            if(deleteCount > 0 && numOfIncertElem > 0) {
                
                if(i < deleteCount) {
                    // элементы уходят в массив удаленных значений
                    arrayDeletedVal[arrayDeletedVal.length] = array[i + start];
                } else {
                    
                    if(array[i + start]) {
                        // Элементы уходят в массив значений для сдвига
                        arrayTempVal[arrayTempVal.length] = array[i + start];
                    }
                } 
                if(arguments[i + startIncertElemInArg]) {
                    // всовываем элемент 
                    array[i + start] = arguments[i + startIncertElemInArg];
                }
            }

        // пока массив с временными значениями не пустой    
        } else if(arrayTempVal.length) {

            if(deleteCount > numOfIncertElem) {
                array[start + numOfIncertElem + i - numberOfIterations] = arrayTempVal[0];
            } else {
                // если кол-во вставляемых эл-тов менее кол-ва сдвигаемых элементов(кол-во итераций - кол-во сдвигаемых элементов)
                if(numOfIncertElem < arrayTempVal.length ) {
                    // тут перетираем значения начиная с индекса (start + numOfIncertElem), (i - numberOfIterations) - увеличивает счетчик
                    array[start + numOfIncertElem + i - numberOfIterations] = arrayTempVal[0];
                } else {
                    push(array, arrayTempVal[0]);   
                }
            }
            
            arrayTempVal.shift();
        }
    }
    // условие для 2-го варианта, где длинна массива остается без учета удаленных элементов
    if(numOfIncertElem === 0) {
        array.length = start + numberOfIterations - deleteCount;            
    } 
    // условие для 3-го варианта, где длинна массива остается без учета удаленных элементов
    if(deleteCount > numOfIncertElem) {
        array.length = originlArraySize - deleteCount + numOfIncertElem;
    }
    
    return arrayDeletedVal;
}

function isArray(array) {
    return Array.isArray(array);
}

function getIndexForSplice(array, index) {
    index = (index > array.length) ? array.length : 
            (index >= 0) ?  index : (array.length + index);
    
    return index;
}

function slice(array, start = 0, end = array.length) {
    start = getIndexForSplice(array, start);
    end = getIndexForSplice(array, end);
    let newArray = [];

    if(isArray(array)) {

        for (let i = start; i < end; i += 1) {
            push(newArray, array[i]);
        }
    }
    
    return newArray;
}

function push(array, element) {
    array[array.length] = element;

    return array.length;
}

let arr = [1, 3, 4, 6, 9, 11];
let spl = splice(arr, 2, 2, "ghj", "tyu", "yui");

console.log(spl, "work function");
console.log(arr);

// "ghj", "tyu", "yui", "qwe", "tyui"
// 