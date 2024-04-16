/**
 * 特点:
 * 1、将对象组合成树形结构，以表示“整体-部分”的层次结构
 * 2、通过对象的多态表现，使得用户对单个对象和组合对象的使用具有一致性
 * 
 * 适用场景：
 * 1、表示对象的部分-整体层次结构
 * 2、希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象
 * 3、需要对一个树形结构进行遍历操作
 * 
 * 优点：
 * 1、高层模块调用简单
 * 2、节点自由增加和删除
 * 3、符合开闭原则
 * 4、可实现对象树中相关对象间的联动
 * 
 * 缺点：
 * 1、如果通过组合模式创建了太多的对象，那么这些对象可能会让系统负担不起。
 */


class  Son {
     talk(){
        console.log('talk to Son')
     }
}

class  Daughter {
     talk(){
        console.log('talk to Daughter')
        
     }
}

class  Family {
     constructor(name){
        this.name = name;
        this.family = [];
     }
     add(obj){
        this.family.push(obj)
        return this
     }
     remove(obj){
        this.family.remove(obj)
    }
    talk(){
        this.family.forEach(item=>{
            item.talk()
        })
    }
}

let family = new Family('张');
let son = new Son();
let daughter = new Daughter();
family.add(son).add(daughter);
family.talk();