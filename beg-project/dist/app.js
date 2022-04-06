"use strict";
// console.log('your code goes here`§');
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let number;
number = 3322;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Alex',
    age: 29,
    hobbies: ['Lifting', 'Cooking'],
    role: Role.ADMIN,
};
console.log(person.role == Role.AUTHOR);
console.log(person);
//--------Functions -----------
function add(n1, n2) {
    return n1 + n2;
}
// ------Classes ----------//
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // public name: string;
        this.employees = [];
        // this.name = n;
    }
    describe() {
        console.log(`${this.id} : ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
const sales = new Department('d1', 'Sales');
sales.describe();
// const accounting = { describe: sales.describe, name: 'accounting', id: '2A' };
class ITdepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No Report Found');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in valid value');
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
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
const namesA = [];
const names = [];
names.push('Alex');
names[0].split(' ');
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('promise');
        res('name');
    }, 2000);
});
promise.then((data) => {
    console.log(data.split(' '));
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 29 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length > 0)
        descriptionText = 'Got ' + element.length + ' elements.';
    return [element, descriptionText];
}
// console.log(countAndDescribe(['Sports', 'cooking']));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'Joe' }, 'name');
class dataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new dataStorage();
textStorage.addItem('Pen');
textStorage.addItem('Paper');
textStorage.removeItem('Pen');
//--------    DECORATORAS     --------------//
function Logger(constructor) {
    console.log(constructor);
    console.log('logging...');
}
let PersonA = class PersonA {
    constructor() {
        this.name = 'Max';
        console.log('create person object');
    }
};
PersonA = __decorate([
    Logger
], PersonA);
const pers = new PersonA();
console.log(pers);
