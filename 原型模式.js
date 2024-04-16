/**原型模式
 * 特点：原型模式（prototype）是指用原型实例指向创建对象的种类，并且通过拷贝这些原型创建新的对象。
 * 
 * 适用场景：
 * 1、当创建新的对象实例较为复杂时，通过原型模式可以简化对象的创建过程，通过复制一个已有实例可以提高新实例的创建效率。
 *
 * 
 * 优点：
 * 1、性能提高。    
 * 2、简化对象的创建。
 * 
 * 
 */


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name,age);
        this.grade = grade;
    }
    
    sayHello() {
        console.log('Hello I am ' + this.name + '，I am ' + this.age + ' years old, and I am in grade ' + this.grade )
    }
}


let student1 = new Student('Tom', 12, 'A');
student1.sayHello();