class Rectangle {
    constructor(_width, _height, _color) {
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea() {
        return this.width * this.height
    }
}

const rectangle1 = new Rectangle(50, 10,'Red');
const rectangle2 = new Rectangle(20, 20);

console.log(rectangle1);
console.log(rectangle2);
console.log(rectangle1.getArea())
console.log(rectangle2.getArea())

class Animal {
    constructor({ _age, _name }) {
        this.age = _age;
        this.name = _name
    }

    speak() {
        console.log('generic animal sound')
    }
}

class Dog extends Animal {
    constructor({ _age, _name }) {
        super({ _age, _name })
        this.type = 'dog'
        this.sound = ' woof woof'
    }
    speak() {
        console.log(this.sound);
    }
}

const animal1 = new Animal({ _age: 2, _name: 'Keri' })
const dog1 = new Dog({ _age: 2, _name: 'Keri' })

console.log(animal1);
console.log(dog1);
