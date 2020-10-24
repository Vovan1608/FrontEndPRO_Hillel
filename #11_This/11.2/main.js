// "use strict";

/*
Реализовать объект с методами m1(), m2(), m3(). Должна быть возможность выполнять подобный код:

obj.m1().m2().m3();
obj.m2().m1().m3();
obj.m2().m1().m3().m1().m1();
...
*/

var obj = {
  m1: function() {
    console.log("m1");
    return this; // нужно возвращать объект в каждом методе(this это копия obj)
  },
  m2: function() {
    console.log("m2");
    return this;
  },
  m3: function() {
    console.log("m3")
    return this;
  }
}

obj.m1().m2().m3().m1();