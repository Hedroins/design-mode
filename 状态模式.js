/**
 * 特点：允许一个对象在其内部状态改变的时候改变它的行为，对象看起来似乎修改了它的类
 * 应用场景：当一个对象的行为取决于它的状态，并且它必须在运行时刻根据状态改变它的行为时，就可以考虑使用状态模式
 * 优点：
 * 1、定义了状态与行为之间的关系，封装在一个类里，更直观清晰，增改方便
 * 2、状态与状态间，行为与行为间彼此独立互不干扰
 * 3、用对象代替字符串来记录当前状态，使得状态的切换更加一目了然
 * 
 * 缺点：
 * 1、会在系统中定义许多状态类
 * 
 * 
 * State :  state  handle(context:Context)
 * 
 *Context :  state  getState()  setState(state:State)
 * 
 * 
 */

class State {
    constructor(state) {
        this.state = state
    }
    handle(context) {
        console.log(`this is ${this.state} light`)
        context.setState(this)
    }
}
class Context {
    constructor() {
        this.state = null
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
    }
}
// test 
let context = new Context()
let weak = new State('weak')
let strong = new State('strong')
let off = new State('off')

// 弱光
weak.handle(context)
console.log(context.getState())

// 强光
strong.handle(context)
console.log(context.getState())

// 关闭
off.handle(context)
console.log(context.getState())