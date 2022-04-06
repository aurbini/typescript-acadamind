interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;
  constructor(public name: string) {}

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

let user1 = new Person('Mike');

user1.greet('Hello I am ');
console.log(user1);
