/**
 * 特点：将一个类的接口转化为另外一个接口，以满足用户需求。使类之间接口不兼容问题通过适配器得以解决。
 * 优点：
 * 1、可以让任何两个没有关联的类一起运行。
 * 2、提高了类的复用。
 * 
 * 
 * 适配器与代理模式相似
       1、适配器模式： 提供一个不同的接口（如不同版本的插头）
       2、代理模式： 提供一模一样的接口
 */


class GPU{
    constructor(){
        this.name='我是显卡'
    }

    work(){
        return 'gpu work'
   }
}


class Computer{
    constructor(){
        this.gpu = new GPU()
    }

    work(){
        console.log(this.gpu.work() + '  电脑整体工作')
    }
}


let computer = new Computer()
computer.work()  // 我是显卡  电脑整体工作