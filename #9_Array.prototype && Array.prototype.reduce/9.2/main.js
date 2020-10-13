"use strict";

/*
Данна следующая коллекция:
требуется свернуть её (использовать Array,prototype.reduce) в объект типа:

{
    [family]: <count>
} 
Например:
{
    Cow: 4
    Chicken: 1
    Goose: 1
    Goat: 2
    Quail: 1
    Rooster: 1
    Sheep: 1 
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
].reduce( (accumulator, curent) => {
    
    return Object.assign(accumulator, {[curent.family]: 1})
}, {});

console.log(farmAccountLog);