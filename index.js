class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        salary = Number(rate) * Number(days);
        console.log(salary);
    }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());