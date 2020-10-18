"use strict";

/*
Данна следующая коллекция:
требуется свернуть её (использовать Array,prototype.reduce) в объект типа:

{
[register]: {
    length: <number>,
    [type] : {
        length: <number>,
        [class]: {
            length: <number>,
            [family]: {
                names: Array<string> (Массив строк (animal.name))
                }
            }
        }
    },
    [stats]: {
        count: <number>,
        males: <number>,
        females: <number>,
        minAge: <number>,
        maxAge: <number>,
    }
}
*/

const farmAccountLog = [
    {
        id: 11,
        type: "Meat",
        class: "Cattle",
        family: "Cow",
        name: "Wiz",
        gender: "♂",
        age: 10
    },
    {
        id: 12,
        type: "Milk",
        class: "Cattle",
        family: "Cow",
        name: "Roseanne",
        gender: "♀",
        age: 2
    },
    {
        id: 13,
        type: "Egg",
        class: "Birds",
        family: "Chicken",
        name: "Bam",
        gender: "♀",
        age: 5
    },
    {
        id: 14,
        type: "Meat",
        class: "Birds",
        family: "Goose",
        name: "Gobble",
        gender: "♂",
        age: 8
    },
    {
        id: 15,
        type: "Milk",
        class: "Cattle",
        family: "Goat",
        name: "Anti",
        gender: "♀",
        age: 9
    },
    {
        id: 16,
        type: "Income",
        class: "Cattle",
        family: "Cow",
        name: "Gizmo",
        gender: "♂",
        age: 10
    },
    {
        id: 17,
        type: "Egg",
        class: "Birds",
        family: "Quail",
        name: "Maya",
        gender: "♀",
        age: 2
    },
    {
        id: 18,
        type: "Meat",
        class: "Birds",
        family: "Rooster",
        name: "Toto",
        gender: "♂",
        age: 1
    },
    {
        id: 18,
        type: "Milk",
        class: "Cattle",
        family: "Sheep",
        name: "Hannah",
        gender: "♀",
        age: 5
    },
    {
        id: 19,
        type: "Milk",
        class: "Cattle",
        family: "Cow",
        name: "Sparky",
        gender: "♀",
        age: 7
    },
    {
        id: 20,
        type: "Income",
        class: "Cattle",
        family: "Goat",
        name: "Charlie",
        gender: "♂",
        age: 3
    }
].reduce( (acc, curent) => {
    acc[curent.family] = ([curent.family] in acc) ? (acc[curent.family] + 1) : 1; 

    return acc;
}, {});

console.log(farmAccountLog);