"use strict";
class Person {
    constructor(name) {
        this.name = name;
        this.age = 30;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1 = new Person('Mike');
user1.greet('Hello I am ');
console.log(user1);
