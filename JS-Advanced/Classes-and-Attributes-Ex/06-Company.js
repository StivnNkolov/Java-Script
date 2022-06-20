class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!')
        }
        if (!this.departments[department]) {
            this.departments[department] = {
                workers: {},
                avgSalary: 0,
            }
        }

        
        this.departments[department].workers[name] = { salary: salary, position: position };
        // this.departments[department].avgSalary = 
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        this.calculateAverageSalary();
        let bestDepartmentKey = Object.keys(this.departments)
            .sort((a, b) => {
                return this.departments[b].avgSalary - this.departments[a].avgSalary;
            })[0];

        let bestDepartment = this.departments[bestDepartmentKey];
        let bestDepartmentString = `Best Department is: ${bestDepartmentKey}\n`;
        let avgSalaryString = `Average salary: ${bestDepartment.avgSalary}\n`;
        let sortedEmpString = Object.keys(bestDepartment.workers)
            .sort((nameA, nameB) => {
                let workerA = bestDepartment.workers[nameA];
                let workerB = bestDepartment.workers[nameB];
                if (workerA.salary == workerB.salary) {
                    return nameA.localeCompare(nameB); 
                }
                return workerB.salary - workerA.salary;
            })
            .reduce((pv, cv) => {
                let currentWorkerStats = this.departments[bestDepartmentKey].workers[cv];
                let currentWorkerString = `${cv} ${currentWorkerStats.salary} ${currentWorkerStats.position}`;
                pv.push(currentWorkerString)
                return pv;
            }, [])
            .join('\n');

        return bestDepartmentString + avgSalaryString + sortedEmpString

    }

    calculateAverageSalary() {
        for (let department in this.departments) {
            let departmentWorkers = this.departments[department].workers; 
            let workingNumber = 0;
            for (let worker in departmentWorkers) {
                workingNumber += departmentWorkers[worker].salary;
            }
            this.departments[department].avgSalary = (workingNumber / Object.keys(departmentWorkers).length).toFixed(2);
        }

    }
}
let c = new Company();
c.addEmployee("Dtanimir", 2000, "engineer", "Construction");
c.addEmployee("Cesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Blavi", 500, "dyer", "Construction");
c.addEmployee("Atan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());