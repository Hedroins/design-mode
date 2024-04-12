/**
 * 特点：1、动态地给某个对象添加一些额外的职责。
 *      2、在不改变原对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，而不会影响从这个类中派生的其他对象。
 * 
 * 优点：1、装饰类和被装饰类都只关心自身的核心业务，实现了解耦。
 *      2、可以动态扩展一个实现类的功能。
 * 
 * 
 * 
 * 装饰者模式和适配器模式有点类似，区别是装饰者模式是需要传入一个被装饰类的实例，以这个实例为基础进行装饰，而适配器模式传入一个实例，在构造函数中直接新建一个被适配类的实例。
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



