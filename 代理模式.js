/**
 * 特点:是为一个对象提供一个代用品或占位符，以便控制对它的访问
 * 
 * 例如： 假设当A 在心情好的时候收到花，小明表白成功的几率有
     60%，而当A 在心情差的时候收到花，小明表白的成功率无限趋近于0。
       小明跟A 刚刚认识两天，还无法辨别A 什么时候心情好。如果不合时宜地把花送给A，花
       被直接扔掉的可能性很大，这束花可是小明吃了7 天泡面换来的。
       但是A 的朋友B 却很了解A，所以小明只管把花交给B，B 会监听A 的心情变化，然后选
        择A 心情好的时候把花转交给A
 * 
 *    代理模式和装饰器模式的区别：装饰器模式的主要是对功能的扩展，原有的功能可以直接使用。代理模式是对被代理对象的功能进行限制。
 * 
 * 
 * 优点： 1、代理模式能将代理对象与被调用对象分离，降低了系统的耦合度,代理模式在客户端与目标对象之间起到一个中介作用和保护目标对象的作用；
 *       2、理对象可以扩展目标对象的功能；通过修改代理对象就可以了，符合开闭原则；
 * 
 * 
 * 
 * 
 */



class Customer {
    buy(shangjia){
      return shangjia.sold()
    }
}



class ProxyMerchant {
    constructor(){
        this.merchant = new Merchant()
    }

    jinhuo(){
        this.merchant = new Merchant()
        return this.merchant.A
    }

    sold(){
        return  this.jinhuo()+ 1000
    }
}




class Merchant{
    constructor(){
        this.A = 800
    }
    sold(){
        return  this.A
    }
}

let proxy = new ProxyMerchant()
let merchant = new Merchant()

let customer = new Customer()

console.log('代理商:',customer.buy(proxy))
console.log('工厂：',customer.buy(merchant))
console.log('原价：',customer.buy(merchant))
// console.log(customer.buy(proxy))

