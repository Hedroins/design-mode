/**
 * 特点：对于一个模块，可能由很多对象构成，而且这些对象之间可能存在相互的引用，
 * 为了减少对象两两之间复杂的引用关系，使之成为一个松耦合的系统，
 * 我们需要使用中介者模式，这就是中介者模式的模式动机。
 * 
 * 中介者模式避免两个对象之间直接互相调用方法。把他们之间的调用关系放到一个中介者对象中，所以中介者把所有的对象都要捏在手里。
 * 
 * 使用场景：
 * 1、系统中对象之间存在比较复杂的引用关系，导致它们之间的依赖关系结构混乱而且难以复用该对象，想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类
 * 2、想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类
 * 
 * 优点：
 * 1、使各对象之间耦合松散，而且可以独立地改变它们之间的交互
 * 2、中介者和对象一对多的关系取代了对象之间的网状多对多的关系
 * 3、如果对象之间的复杂耦合度导致维护很困难，而且耦合度随项目变化增速很快，就需要中介者重构代码
 * 
 * A :numa:number  setNumber(a:A,m:Mediator)
 * B: numb:number   setNumber(b:B,m:Mediator)
 * Mediator ： a:A  b:B  setA():void  setB():void
 * 
 * 
 * 
 */

   class A{
    constructor(){
      this.numa = 0;
    }
    setNumber(a,m){
        this.numa = a
        if(m)
        m.setB()
    }
   }

   class B{
       constructor(){
           this.numb =0 ;
       }

     setNumber(b,m){
        this.numb = b
        if(m)
         m.setA()
     }
   }


   class Mediator{
       constructor(a,b){
           this.a = a;
           this.b = b;
       }
       setA(){
        let number = this.b.numb;
        this.b.setNumber(number*10)
    
        }
        setB(){
            let number = this.a.numa
            this.b.setNumber(number/10)
        }
   }



let a = new A()
let b = new B()
let m = new Mediator(a, b)
a.setNumber(10, m)
console.log(a.numa, b.numb)
b.setNumber(10, m)
console.log(a.numa, b.numb)