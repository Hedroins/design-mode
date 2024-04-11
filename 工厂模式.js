/**
 * 1、不想让某个子系统与较大的那个对象之间形成强耦合
 * 2、而是想运行时从许多子系统中进行挑选的话
 * 3、需要依赖具体环境创建不同实例，这些实例都有相同的行为,这时候我们可以使用工厂模式，简化实现的过程
 * 
 */

class Product{
    constructor(name){
        this.name = name;
    }

    init(){
        console.log('初始化product');
    }
}


class Product2{
    constructor(name){
        this.name = name;
        this.type = 'Product2';
    }

    init(){
        console.log('初始化product2');
    }
}


class Factory{
    create(type,name){
        if(type===Product){
            return new Product(name);
        }

        if(type===Product2){
            return new Product2(name);
        }
        //...
       
    }
}



let factory = new Factory();
let product1 = factory.create(Product,'Product1');
let product2 = factory.create(Product2,'Product2');

console.log(product1.name);
console.log(product2.name);
console.log(product2.init());
console.log(product1.init());