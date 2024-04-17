/**
 * 享元模式
 * 特点：运用共享技术有效地支持大量细粒度对象的复用。系统只使用少量的对象，
 * 而这些对象都很相似，状态变化很小，可以实现对象的多次复用。
 * 由于享元模式要求能够共享的对象必须是细粒度对象，因此它又称为轻量级模式，它是一种对象结构型模式。
 * 
 * 如果在一个系统中存在多个相同的对象，那么只需要共享一份对象的拷贝,而不必为每一次使用都创建新的对象。目的是提高系统性能
 * 
 * 
 * 优点：
 * 1、大大减少对象的创建，降低系统的内存，使效率提高。
 * 
 * 缺点：
 * 1、提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，
 *  不应该随着内部状态的变化而变化，否则会造成系统的混乱
 * 
 * 
 * ExamCar   examine(candidateId:string)  carId:string  carType:boolean  usingState:boolean
 * 
 * ManualExamCarPool   _pool:ExamCar[]  _candidateQueue:string[]  registCandidates(ids:string[]) 
 *                     registCandidate(id:string)  initManualExamCar(num:number) getManualExamCar()
 * 
 */

let examCarNum=0;

class ExamCar{
    constructor(carType){
        this.carId=examCarNum++;
        this.carType=carType;
        this.usingState=false;
    }
    examine(candidateId){
        return new Promise((resolve,reject)=>{
            this.usingState = true
            console.log(`${candidateId}号考生正在${this.carType?'科目一':'科目四'}考试`);
            setTimeout(()=>{
                console.log(`${candidateId}号考生正在考试完毕`);
                this.usingState=false;
                resolve(this.carId)
            },2000)
        })
    }
}

let ManualExamCarPool = {
    _pool:[],
    _candidateQueue:[],
    registCandidates(ids){
        ids.forEach(id=>{
            this.registCandidate(id)
        })
    },
    registCandidate(id){
       let car = this.getManualExamCar();
       if(car){
        car.examine(id).then(()=>{
            const nextCandidateId = this._candidateQueue.length && this._candidateQueue.shift()
            nextCandidateId && this.registCandidate(nextCandidateId)
        })
       }else{
        this._candidateQueue.push(id)
       }
       
    },
    initManualExamCar(num){
     for(let i=0 ;i<num;i++){
         this._pool.push(new ExamCar(true))
     }
    },
    getManualExamCar(){
    return this._pool.find((car)=>{
        return !car.usingState
      })
    }
}


ManualExamCarPool.initManualExamCar(3)          // 一共有3个驾考车
ManualExamCarPool.registCandidates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])  // 10个考生来考试