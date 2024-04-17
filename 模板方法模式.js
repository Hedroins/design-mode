/**
 * 特点：模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。
 * 通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法和封装子类中所有方法的执行顺序。
 * 子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法。
 * 
 *优点：
 *1、提取了公共代码部分，易于维护
 *2、符合开闭原则，扩展性好
 *
 * 缺点:
 * 1、增加了系统复杂度，主要是增加了的抽象类和类间联系
 * 
 * 
 * Beverage  brewDrink:()=>void  addCondiment:()=>void    boilWater()   pourCup()  init()
 * 
 * 
 */

 class Beverage{
    constructor({brewDrink,addCondiment}){
        this.brewDrink = brewDrink
        this.addCondiment = addCondiment
    }
    boilWater(){
        console.log('水烧开了')
    }
    pourCup(){
        console.log('倒进杯子')
    }
    init(){
        this.boilWater()
        this.brewDrink()
        this.pourCup()
        this.addCondiment()
    }
 }


let beverage = new Beverage({
    brewDrink:()=>{
        console.log('泡制饮料')
    },
    addCondiment:()=>{
        console.log('加调料')
    }
})

beverage.init()