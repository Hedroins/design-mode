/**
 * 特点：表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素的类的前提下定义作用于这些元素的新操作
 * 
 * Visitor ： visitConcreteElement(concreteElement:ConcreteElement)
 * 
 * ConcreteElement: operation():void  accept(visitor:Visitor)
 */

class Visitor{
    visitConcreteElement(concreteElement){
        concreteElement.operation()
    }
}

class ConcreteElement{
    operation(){
        console.log('ConcreteElement.operation invoked')
    }

    accept(vistor){
        vistor.visitConcreteElement(this)
    }
}


let visitor = new Visitor()
let element = new ConcreteElement()
element.accept(visitor)