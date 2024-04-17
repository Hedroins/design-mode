/**
 * 职责链模式
 * 
 * 特点：使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系，将这些对象连成一条链，
 * 并沿着这条链传递该请求，直到有一个对象处理它为止
 * 
 * 优点:
 * 1、降低耦合度。它将请求的发送者和接收者解耦
 * 2、简化了对象。使得对象不需要知道链的结构
 * 3、增强给对象指派职责的灵活性。通过改变链内的成员或者调动它们的次序，允许动态地新增或者删除责任
 * 4、增加新的请求处理类很方便
 * 
 * 缺点：
 * 1、不能保证某个请求一定会被链中的节点处理，这种情况可以在链尾增加一个保底的接受者节点来处理这种即将离开链尾的请求。
 * 2、使程序中多了很多节点对象，可能再一次请求的过程中，大部分的节点并没有起到实质性的作用。他们的作用仅仅是让请求传递下去，
 * 从性能当面考虑，要避免过长的职责链到来的性能损耗
 * 
 * Action:  name:string  setNextAction(action:Action)  handle()
 * 
 * 
 *  
 */


class Action{
    constructor(name){
        this.name= name;
        this.nextTick= null;
    }

    setNextAction(action){
        this.nextTick= action;
    }

    handle(){
        console.log(`${this.name} is handling`);
        if(this.nextTick){
            this.nextTick.handle();
        }
    }

}

let action1= new Action('action1');
let action2= new Action('action2');
let action3= new Action('action3');

action1.setNextAction(action2);
action2.setNextAction(action3);
action1.handle();


