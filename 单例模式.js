/**
 * 一个类只有一个实例，并提供一个访问它的全局访问点
 * 优点：
 * 1、划分命名空间，减少全局变量
 * 2、增强模块性，把模块的属性和方法封装在一个对象中
 * 3、且只会实例化一次。简化了代码的调试和维护
 * 
 */

class Collage {
    constructor() {
       this.name = '成都信息工程大学'; // 公有属性
       this.school = '信息工程'; // 私有属性
       this.xiaoxun = "成于大气，信达天下"
    }

    getSchool() {
        return this.school;
    }

    getXiaoxun() {
        return this.xiaoxun;
    }
        
    static getInstance() {
            if(Collage.instance) {
                return Collage.instance;
            }
            Collage.instance = new Collage();
            return Collage.instance;
    }


}


let instance = Collage.getInstance();

console.log(instance.name);
console.log(instance.getSchool());  