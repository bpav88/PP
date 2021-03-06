function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
function Employee(name, surname, job, salary) {
    this.job = job;
    this.salary = salary;
    Person.call(this, name, surname);
}
function Developer(name, surname, job, salary, specialization) {
    this.specialization = specialization;
    Employee.call(this, name, surname, job, salary);
}
function Manager(name, surname, job, salary, department) {
    this.department = department;
    Employee.call(this, name, surname, job, salary);
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Person.prototype.getFullName = function () {
    return this.name + " " + this.surname;
};
Developer.prototype.getSpecialization = function () {
    return this.specialization;
};
Manager.prototype.getDepartment = function () {
    return this.department;
};
Manager.prototype.changeDepartment = function (newDepartment) {
    return this.department = newDepartment;
};
Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.salary;
};
Employee.prototype.getSalary = function () {
    return this.salary;
};
Employee.prototype.increaseSalary = function () {
    return this.salary = this.salary * 1.1;
};

var dule = new Developer("dule", "dulic", "JS", 5000, "react");
var mika = new Manager("Mika", "mikic", "manager", 5000, "it");

console.log(dule.increaseSalary());