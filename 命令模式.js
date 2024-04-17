/**
 * 特点：将一个请求封装成一个对象，从而让你使用不同的请求把客户端参数化，对请求排队或者记录请求日志，可以提供命令的撤销和恢复功能。
 * 
 * 使用场景：
 * 1、当需要将各种执行的动作抽象出来，使用时通过不同的参数来决定执行哪个对象
 * 2、某个或者某些操作需要支持撤销的场景
 * 3、当要对操作过程记录日志，以便后期通过日志将操作过程重新做一遍时
 * 4、当某个操作需要支持事务操作的时候
 * 
 * 优点:
 * 1、对命令进行封装，使命令易于扩展和修改。
 * 2、命令发出者和接受者解耦，使发出者不需要知道命令的具体执行过程即可执行
 * 
 * 缺点：
 * 使用命令模式可能会导致某些系统有过多的具体命令类
 * 
 * Receiver：execute()
 * Command :receiver:Receiver execute ()
 * Invoker: command:Command  invoke()
 */



class Receiver{
     execute(){
         console.log("执行命令")
     }
}

class Command{
     constructor(receiver){
         this.receiver = receiver
     }
     execute(){
        console.log('命令');
         this.receiver.execute()
     }
}

class Invoker{
     constructor(command){
         this.command = command
     }
     invoke(){
         console.log('执行');
         this.command.execute()
     }
}

// 仓库
const warehouse = new Receiver();   
// 订单    
const order = new Command(warehouse);  
// 客户
const client = new Invoker(order);      
client.invoke()
