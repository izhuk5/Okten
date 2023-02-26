// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//   створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(5, 'name3', 'surname3', 'test@gmail.com', '0980000001'),
    new User(2, 'name2', 'surname2', 'test2@gmail.com', '0980000002'),
    new User(1, 'name1', 'surname1', 'test1@gmail.com', '0980000003'),
    new User(4, 'name6', 'surname6', 'test6@gmail.com', '0980000006'),
    new User(7, 'name7', 'surname7', 'test7@gmail.com', '0980000007'),
    new User(9, 'name9', 'surname9', 'test9@gmail.com', '0980000009'),
    new User(10, 'name10', 'surname10', 'test10@gmail.com', '0980000010'),
    new User(13, 'name13', 'surname13', 'test13@gmail.com', '0980000013'),
    new User(14, 'name14', 'surname14', 'test14@gmail.com', '0980000014'),
    new User(15, 'name15', 'surname15', 'test15@gmail.com', '09800000015')
];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
    }
}

let clients = [
    new Client(1, 'user1', 'surname1', 'email1@gmail.com', '0980000001',['pork', 'fish', 'water', 'potato']),
    new Client(3, 'user3', 'surname3', 'email3@gmail.com', '0980000003',['rabbit', 'seafood', 'vodka']),
    new Client(2, 'user2', 'surname2', 'email2@gmail.com', '0980000002',['lamb', 'water']),
    new Client(6, 'user6', 'surname6', 'email6@gmail.com', '0980000006',['beef','Coca-Cola', 'potato']),
    new Client(5, 'user5', 'surname5', 'email5@gmail.com', '0980000005',['Chicken', 'fish', 'water', 'potato']),
    new Client(8, 'user8', 'surname8', 'email8@gmail.com', '0980000008',['Duck', 'Coca-Cola', 'vodka', 'potato']),
    new Client(7, 'user7', 'surname7', 'email7@gmail.com', '0980000007',['Offal', 'fish', 'water', 'potato']),
    new Client(10, 'user10', 'surname10', 'email10@gmail.com', '0980000010',['Minced meat','potato'], 'water'),
    new Client(9, 'user9', 'surname9', 'email9@gmail.com', '0980000009',['pork', 'fish', 'water', 'potato']),
    new Client(11, 'user11', 'surname11', 'email9@gmail.com', '0980000009',['fish', 'fish', 'fish', 'fish'])
]

let sortedClients = [...clients];
sortedClients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, madeBy, year, maxSpeed, engineVolume) {
    this.model = model;
    this.madeBy = madeBy;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    Car.prototype.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    Car.prototype.info = function () {
        console.log(`
        Model - ${model}
        Made by - ${madeBy}
        Year - ${year}
        Max Speed - ${maxSpeed}
        Engine Volume - ${engineVolume}
        `);
    }
    Car.prototype.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    Car.prototype.changeYear = function (newValue) {
        this.year = newValue;
    }
    Car.prototype.addDriver = function (driver) {
        this.driver = driver;
    }
}
let car = new Car('Porsche', 'Ferdinand Porsche', 1931, 100, 2.0);
console.log(car);
car.increaseMaxSpeed(160);
car.changeYear(1932);
car.addDriver({name: 'Ihor', age: 28});
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car1 {
    constructor(model, madeBy, year, maxSpeed, engineVolume) {
        this.model = model;
        this.madeBy = madeBy;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        console.log(`
        Model - ${this.model}
        Made by - ${this.madeBy}
        Year - ${this.year}
        Max Speed - ${this.maxSpeed}
        Engine Volume - ${this.engineVolume}
        `);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let car2 = new Car1('Dodge Charger', 'Chrysler Corporation', 2006, 220, 3,4);
car2.drive();
car2.info();
car2.increaseMaxSpeed(240);
car2.changeYear(2007);
car2.addDriver({driver1: 'Ihor', driver2: 'Alina'});
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Lady {
    constructor(name, age, sizeShoes) {
        this.name = name;
        this.age = age;
        this.sizeShoes = sizeShoes;
    }
}

let princess = [
    new Lady('Lady2', 28, 35),
    new Lady('Lady3', 25, 32),
    new Lady('Lady1', 30, 39),
    new Lady('Lady4', 19, 31),
    new Lady('Lady5', 16, 38),
    new Lady('Lady6', 17, 40),
    new Lady('Lady7', 24, 34),
    new Lady('Lady8', 22, 39),
    new Lady('Lady9', 21, 40),
    new Lady('Lady10', 20, 34)
];

class Prince extends Lady{
    constructor(name, age, sizeShoes) {
        super(name, age, sizeShoes);
    }
}

let prince = new Prince ('Prince', 21, 40);
for (const item of princess) {
    if (prince.sizeShoes === item.sizeShoes) {
        console.log(`${prince.name} should have sex with - ${item.name}`);
    }
}
console.log(princess.find(i => i.sizeShoes === prince.sizeShoes ));



