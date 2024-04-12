/**
 * 
 * 外观模式就是把所有相关的接口封装到一个高级的接口中，在这个高级的接口中调用封装的各个接口。
 * 减少外部对底层各种繁杂接口的依赖。
 * 
 * 优点：
 *  1、减少系统相互依赖
 *  2、提高灵活性
 *  3、提高了安全性
 * 
 * 缺点：
 *  1、不符合开闭原则，如果要改东西很麻烦，继承重写都不合适
 * 
 * 
 */


// 外观模式

let addMyEvent = function(el,ev,fn) {
    if(el.addEventListener){
        el.addEventListener(ev,fn,false)
    }else if(el.attachEvent){
        el.attachEvent('on'+ev,fn)
    }else{
        el['on'+ev] = fn
    }
}