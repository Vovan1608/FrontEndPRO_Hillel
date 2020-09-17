var first = "18 лет Юрий Иванов";
var second = "16 лет Дмитрий Кузьмин";
var third = "19 лет Оксана Петрова";

console.log("**************");
console.log("Список студентов зарегестрировавшихся на вебинар:"); 
console.log("1. " + first); 
console.log("2. " + second);
console.log("3. " + third); 
console.log(
    "------------------- Средний возраст студента: " + 
    (parseInt(first) + parseInt(second) + parseInt(third)) / 3 + 
    " --------------"
);
console.log("**************");