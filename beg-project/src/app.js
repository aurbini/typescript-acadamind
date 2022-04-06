// console.log('your code goes here`§');
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var number;
number = 3322;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Alex',
    age: 29,
    hobbies: ['Lifting', 'Cooking'],
    role: Role.ADMIN
};
console.log(person.role == Role.AUTHOR);
console.log(person);
//--------Functions -----------
function add(n1, n2) {
    return n1 + n2;
}
// ------Classes ----------//
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // public name: string;
        this.employees = [];
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log(this.id + " : " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.createEmployee = function (name) {
        return { name: name };
    };
    return Department;
}());
var sales = new Department('d1', 'Sales');
sales.describe();
// const accounting = { describe: sales.describe, name: 'accounting', id: '2A' };
var ITdepartment = /** @class */ (function (_super) {
    __extends(ITdepartment, _super);
    function ITdepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITdepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No Report Found');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in valid value');
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name == 'Alex') {
            return;
        }
        this.employees.push(name);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee('Max');
// console.log(employee1);
var ITDepA = new ITdepartment('d1', ['Alex']);
var accounting = new AccountingDepartment('d2', []);
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
var namesA = [];
var names = [];
names.push('Alex');
names[0].split(' ');
var promise = new Promise(function (res, rej) {
    setTimeout(function () {
        console.log('promise');
        res('name');
    }, 2000);
});
promise.then(function (data) {
    console.log(data.split(' '));
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'Max' }, { age: 29 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    var descriptionText = 'Got no value.';
    if (element.length > 0)
        descriptionText = 'Got ' + element.length + ' elements.';
    return [element, descriptionText];
}
// console.log(countAndDescribe(['Sports', 'cooking']));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'Joe' }, 'name');
var dataStorage = /** @class */ (function () {
    function dataStorage() {
        this.data = [];
    }
    dataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    dataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    dataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return dataStorage;
}());
var textStorage = new dataStorage();
textStorage.addItem('Pen');
textStorage.addItem('Paper');
textStorage.removeItem('Pen');
//--------    DECORATORAS     --------------//
function Logger(constructor) {
    console.log(constructor);
    console.log('logging...');
}
var PersonA = /** @class */ (function () {
    function PersonA() {
        this.name = 'Max';
        console.log('create person object');
    }
    PersonA = __decorate([
        Logger
    ], PersonA);
    return PersonA;
}());
var pers = new PersonA();
console.log(pers);
var courses = [
    {
        id: 1,
        description: 'hello'
    },
];
courses.find(function (course) {
    return course.id == 1;
});
