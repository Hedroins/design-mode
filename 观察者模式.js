/**
 * 特点：定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，
 * 使它们能够自动更新自己，当一个对象的改变需要同时改变其它对象，并且它不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。
 * 
 * 观察者模式包含以下角色：
 * Subject: 目标对象，它把所有对观察者对象的引用保存在一个集合中，每个subject可以有任意数量的观察者。
 * Observer: 抽象观察者，为所有的观察者定义一个接口，在得到主题的通知时更新自己。
 * Subject具有的功能：注册（attach）、移除（detach）、通知（notify）。
 * 
 * 优点：
 * 1、支持简单的广播通信，自动通知所有已经订阅过的对象
 * 2、目标对象与观察者之间的抽象耦合关系能单独扩展以及重用
 * 3、增加了灵活性
 * 4、观察者模式所做的工作就是在解耦，让耦合的双方都依赖于抽象，而不是依赖于具体。从而使得各自的变化都不会影响到另一边的变化。
 * 
 * 缺点：
 * 1、如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间.
 * 2、如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。
 * 3、观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。
 * 
 * 
 * Subject： status:number  observers:any[]   attach(observer:Observer)  notifyAll()   getStatus()  setStatus(status:number)
 * 
 * Observer: observe(subject:Subject)  update(subject:Subject)
 */


class Subject {
 constructor() {
    this.status = 0
    this.observers = []
   } 
  
   attach(observer){
    this.observers.push(observer)
   }

   notifyAll(){
       this.observers.forEach(observer => {
           observer.update(this)
       })
   }

   setStatus(status){
       this.status = status
       this.notifyAll()
   }

   getStatus(){
       return this.status
   }

}


class Observer {
    observe(subject){
        subject.attach(this)
    }

    update(subject){
        console.log('subject status changed to ' + subject.getStatus())
    }
}


let subject = new Subject()
let observer = new Observer()

observer.observe(subject)
observer.observe(subject)
observer.observe(subject)

subject.setStatus(1)
