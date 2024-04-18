/**
 * 特点:给定一个语言, 定义它的文法的一种表示，并定义一个解释器, 该解释器使用该表示来解释语言中的句子
 * 
 * 适用场景：
 * 1、可以将一个需要解释执行的语言中的句子表示为一个抽象语法树
 * 2、一些重复出现的问题可以用一种简单的语言来进行表达
 * 
 * 优点:
 * 1、易于改变和扩展文法
 * 2、由于在解释器模式中使用类来表示语言的文法规则，因此可以通过继承等机制来改变或扩展文法
 * 
 * 缺点：
 * 1、执行效率较低，在解释器模式中使用了大量的循环和递归调用，因此在解释较为复杂的句子时其速度慢
 * 2、对于复杂的文法比较难维护
 * 
 * Context：_list:[]  _sum:number  sum:get  sum:set  add(expression)  list:get
 * PlusExpression : interpret(context)  
 * MinusExpression : interpret(context)
 */

class Context {
    constructor() {
        this._list = [];
        this._sum = 0;
    }
    get list() {
        return this._list;
    }
    get sum() {
        return this._sum;
    }
    set sum(value) {
        this._sum = value;
    }
    add(expression) {
        this._list.push(expression);
    }
}

class PlusExpression{
    interpret(context) {
        context.sum  = context.sum +1;
    }
}

class MinusExpression{
    interpret(context) {
        context.sum  = context.sum-1
}
}



let context = new Context();

let plusExpression = new PlusExpression();
let minusExpression = new MinusExpression();
context.add(plusExpression);
context.add(minusExpression);
context.add(new PlusExpression());
context.add(new PlusExpression());
context.add(new PlusExpression());

context.list.forEach(element => {
    element.interpret(context);
});
console.log(context.sum);




