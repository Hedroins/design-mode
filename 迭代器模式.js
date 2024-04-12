/**
 * 特点:提供一种方法顺序遍历一个聚合对象中各个元素，而又不暴露该对象的内部表示。
 * 
 *Iterator ：  next()    hasNext()   list  index
 *
 *Container:   getIterator()   list
 * 
 * 
 * 访问一个聚合对象的内容而无需暴露它的内部表示
 * 
 * 
 * 应用场景：对于集合内部结果常常变化各异，不想暴露其内部结构的话，但又想让客户代码透明的访问其中的元素，可以使用迭代器模式
 */


 class Iterator{
    constructor(list){
        this.index = 0
        this.list = list;
    }

    next(){
        if(this.hasNext()){
            return this.list[this.index++]
        }
        return null
    }

    hasNext(){
        if(this.index>=this.list.length){
            return false
        }
        return true
    }
 }

 class Container{
    constructor(list){
        this.list = list
    }

    getIterator(){
        return new Iterator(this.list)
    }
 }


 let container = new Container([1,2,3,4,5]);
 let iterator = container.getIterator();
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())