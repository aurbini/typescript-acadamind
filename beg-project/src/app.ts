// console.log('your code goes here`§');

let number: number;

number = 3322;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Alex',
  age: 29,
  hobbies: ['Lifting', 'Cooking'],
  role: Role.ADMIN,
};

console.log(person.role == Role.AUTHOR);

console.log(person);

//--------Functions -----------

function add(n1: number, n2: number) {
  return n1 + n2;
}

// ------Classes ----------//

class Department {
  // public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`${this.id} : ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

const sales = new Department('d1', 'Sales');

sales.describe();

// const accounting = { describe: sales.describe, name: 'accounting', id: '2A' };

class ITdepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No Report Found');
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in valid value');
    }
    this.addReport(value);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name == 'Alex') {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee('Max');

// console.log(employee1);

const ITDepA = new ITdepartment('d1', ['Alex']);
const accounting = new AccountingDepartment('d2', []);

accounting.addReport('something went wrong');
accounting.mostRecentReport = 'passed report';

// console.log(accounting.mostRecentReport);

accounting.addEmployee('Alex');
accounting.addEmployee('Max');

accounting.printReports();
// console.log(ITDepA);
// console.log(accounting);

//---------GENERICS ---------//

// const names = ['Max', 'Manuel'];

const namesA: string[] = [];
const names: Array<string> = [];
names.push('Alex');

names[0].split(' ');

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('promise');
    res('name');
  }, 2000);
});

promise.then((data) => {
  console.log(data.split(' '));
});

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max' }, { age: 29 });

console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length > 0)
    descriptionText = 'Got ' + element.length + ' elements.';
  return [element, descriptionText];
}

// console.log(countAndDescribe(['Sports', 'cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: 'Joe' }, 'name');

class dataStorage<T extends string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new dataStorage<string>();
textStorage.addItem('Pen');
textStorage.addItem('Paper');
textStorage.removeItem('Pen');

//--------    DECORATORAS     --------------//

function Logger(constructor: Function) {
  console.log(constructor);
  console.log('logging...');
}

@Logger
class PersonA {
  name = 'Max';

  constructor() {
    console.log('create person object');
  }
}

const pers = new PersonA();

console.log(pers);

interface COURSE {
  id: number;
  description: string;
}

const courses: Array<COURSE> = [
  {
    id: 1,
    description: 'hello',
  },
];

courses.find((course: COURSE) => {
  course.
  return course.id == 1;
});
