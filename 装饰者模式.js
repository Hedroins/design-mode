/**
 * 特点：1、动态地给某个对象添加一些额外的职责。
 *      2、在不改变原对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，而不会影响从这个类中派生的其他对象。
 * 
 * 优点：1、装饰类和被装饰类都只关心自身的核心业务，实现了解耦。
 *      2、可以动态扩展一个实现类的功能。
 */


class  Person{
    constructor(name){
        this.name = name;
    }
    say(){
        console.log(`${this.name} say hello`);
    }
}

class Decorator{
     constructor(person){
         this.person = person;
     }

    cloth (){
        this.cloth = 'T-shirt';
    }
}

let personWithCloth = new Decorator(new Person('Tom'));
personWithCloth.cloth();
console.log(personWithCloth.cloth);
console.log(personWithCloth.person.name);



