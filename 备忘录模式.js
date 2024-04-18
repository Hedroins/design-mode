/**
 * 备忘录模式
 * 
 * 特点：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到保存的状态。
 * 
 * 优点：
 * 1、给用户提供了一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态
 * 2、用户可以利用好历史状态，从而避免无效操作，提高效率
 * 
 * 缺点：
 * 1、消耗资源。如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存
 * 
 * 应用场景：
 * 1、需要保存/恢复数据的相关状态场景
 * 2、提供一个可回滚的操作
 * 3、提供一个可恢复的对话场景
 * 
 * Memto   content:string  getContent():string
 * CareTaker list:Memto[]  add(memto:Memto):void  get(index:number):Memto
 * Editor  content:string  getContent():string  setContent(content:string):void  saveContentToMemento():Memto getContentFromMemento(memento:Memto) 
 * 
 */


class Memto{
    constructor(content){
        this.content = content;
    }

    getContent(){
        return this.content;
    }
}

class CareTaker{
    constructor(){
        this.list = [];
    }

    add(memto){
        this.list.push(memto);
    }

    get(index){
        return this.list[index];
    }

}


class Editor{
    constructor(content){
        this.content = content;
    }

    getContent(){
        return this.content;
    }

    setContent(content){
        this.content = content;
    }

    saveContentToMemento(){
        return new Memto(this.content);
    }

    getContentFromMemento(memento){
        this.content = memento.getContent();
    }
    
}

let editor = new Editor()
let careTaker = new CareTaker()

editor.setContent('111')
editor.setContent('222')
careTaker.add(editor.saveContentToMemento())
editor.setContent('333')
careTaker.add(editor.saveContentToMemento())
editor.setContent('444')

console.log(editor.getContent()) //444
editor.getContentFromMemento(careTaker.get(1))
console.log(editor.getContent()) //333

editor.getContentFromMemento(careTaker.get(0))
console.log(editor.getContent()) //
