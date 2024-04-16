/**
 * 策略模式
 * 
 * 特点：定义一系列的算法，把它们一个个封装起来，并且使它们可以互相替换
 * 
 * 优点：
 * 1. 策略模式提供了对开放-封闭原则的完美支持，将算法封装在独立的strategy中，使得它们易于切换，易于理解，易于扩展
 * 2. 策略模式中的算法也可以复用在系统的其他地方，从而避免许多复制粘贴
 * 3. 在策略模式中利用组合和委托来让Context拥有执行算法的能力，这也是继承的一种更轻便的替代方案
 * 
 * 缺点：
 * 1. 客户端必须知道所有的strategy，并自行决定使用哪一个strategy
 * 2. 如果策略类太多，会导致类文件太多
 * 
 *
 * 
 */

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    
    executeStrategy() {
        this.strategy.doSomething();
    }
}

class StrategyA {
    doSomething() {
        console.log('执行策略A');
    }
}

class StrategyB {
    doSomething() {
        console.log('执行策略B');
    }
}

// 使用
const context = new Context(new StrategyA());
context.executeStrategy();

context.strategy = new StrategyB(); 
context.executeStrategy();