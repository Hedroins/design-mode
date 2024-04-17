/**
 * 职责链模式
 * 
 * 特点：使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系，将这些对象连成一条链，
 * 并沿着这条链传递该请求，直到有一个对象处理它为止
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


