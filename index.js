class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        let salary = this.rate * this.days;
        return salary;
    }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);
let artist = new Worker('Лилия', 'Чертовских', 50, 29);