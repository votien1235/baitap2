
class Person {
    name;
    age;
    sex;
    address;

    constructor(name, age, sex, address) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
    }

    speak() {
        console.log("em Đẹp quá");
    }

    introduce() {
        `
    Tên tôi là ${this.name},
    Tôi năm nay ${this.age} tuổi,
    Giới tính ${this.sex},
    Địa chỉ là ${this.address},
    `}
}

class Crush extends Person {
    favourites;
    appearance;

    constructor(name, age, address, favourites, appearance) {
        super(name, age, 'girl', address);
        this.favourites = favourites;
        this.appearance = appearance;
    }

    speak() {
        console.log("mãi là friendZone");
    }
}

let le = new Crush("le", 21, "ha noi", "eat", "beauty");
let anh = new Crush("Anh", 19, "ha noi", "sing", "beauty");


console.log(le);
console.log(anh);




class oldGirlFriend extends Person {
    appearance;

    constructor(name, age, address, appearance) {
        super(name, age, 'girl', address);
        this.appearance = appearance;
    }

    speak() {
        console.log("nhớ nhau hông");
    }
}

let hong = new oldGirlFriend("hong", 22, "Ha Noi", "Beauty Girl");
let hai = new oldGirlFriend("hai", 21, "Hai phong", "Cute Girl");
console.log(hong);
console.log(hai);
hong.speak();


class List {
    owner;
    persons = [];
    constructor(owner, persons) {
        this.owner = owner;
        this.persons = persons;
    }
    addCrush() {
        let name = prompt("crush's name");
        let age = prompt("crush's age");
        let address = prompt("address crush");
        let appearance = prompt("appearance crush");
        let favourites = prompt("favourites Crush ");
        let crush = new Crush(name, age, address, favourites, appearance);
        this.persons.push(crush); // e không hiểu em sai ở chỗ nào mà khi chạy ko thực hiện push vào được ạ
    }
    addOldGirlfriend() {
        let name = prompt("Name nyc");
        let age = prompt("age nyc");
        let address = prompt("address nyc");
        let appearance = prompt("appearance nyc");
        let oldgirlfriend = new oldGirlFriend(name, age, address, appearance);
        this.persons.push(oldgirlfriend); // e không hiểu em sai ở chỗ nào mà khi chạy ko thực hiện push vào được ạ
    }
    showAll() {
        for (let i = 0; i < this.persons.length; i++) {
            console.log(this.persons[i]);
        }
    }
}
let Thao = new List('tien','thao');
Thao.addOldGirlfriend();
