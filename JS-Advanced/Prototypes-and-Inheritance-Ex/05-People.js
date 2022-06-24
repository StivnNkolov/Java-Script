function solution() {
    class Employee {
        constructor(name, age) {
            if (new.target == Employee) {
                throw new Error('Can"t initialize abstract class')
            }

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this.currentTask = 0;
        }
        work() {
            console.log(this.name + ' ' + this.tasks[this.currentTask]);
            this.currentTask += 1;
            if (this.currentTask == this.tasks.length) {
                this.currentTask = 0;
            }
        }

        collectSalary() {
            let result = this.salary
            if (this.hasOwnProperty('dividend')) {
                result += this.dividend;
            }

            console.log(`${this.name} received ${result} this month.`);

        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks = [
                'is working on a simple task.',
            ]
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);

            this.tasks = [
                'is working on a complicated task.',
                'is taking time off work.',
                'is supervising junior workers.',
            ]
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);

            this.dividend = 0;
            this.tasks = [
                'scheduled a meeting.',
                'is preparing a quarterly report.',
            ]
        }


    }

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    }
}


const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();