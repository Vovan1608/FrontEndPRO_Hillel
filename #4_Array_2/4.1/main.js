/*
В одномерном массиве произвести замену:
1. 1 элемент поменять со 2
2. 3 элемент поменять с 4
3. 5 элемент поменять с 6
и т.д.
Если массив непарный - последний элемент не трогать
*/

let arr = [1, 2, 3, 4, 5, 6];

let arrSize;

if(arr.length % 2 == 0){
    arrSize = arr.length;
}else{
    arrSize = arr.length - 1;
}

for(let i = 0; i < arrSize - 1; i += 2){
    [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
}

console.log(arr);