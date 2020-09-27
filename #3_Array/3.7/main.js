/*
1) Массив [1, 2, 3, 4, 5] вывести на экран через разделитель
2) Организовать вывод массива [6, 7, 2, 3, 5, 7] в виде списка при помощи трегов
ul-li
3) В массиве вырезать центральный элемент
*/

//1)
console.log([1, 2, 3, 4, 5].join("_"));


//2)
let arr = [6, 7, 2, 3, 5, 7];

document.write(`<ul>`);
for(let i = 0, arrSize = arr.length; i < arrSize; i++){
    document.write(`<li>${arr[i]}</li>`);
}
document.write(`</ul>`);


document.write(`<br>---------------------`);

document.write("<ul><li>");
document.write(arr.join("</li><li>"));
document.write("</li></ul>")

document.write(`<br>---------------------<br>`);


//3)
let arr1 = [1, 2, 3, 4, 5, 6];

if (arr1.length % 2 !== 0){
    arr1.splice( arr1[parseInt(arr1.length / 2)], 1);
}else{
    arr1.splice([arr1.length / 2 - 1], 2);
}

console.log(arr1);
