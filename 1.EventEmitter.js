// https://www.devtools.tech/questions/s/how-to-implement-event-emitter-in-javascript-or-facebook-interview-question---qid---J4fNqXImp6QIdGMc7SPF


class Emitter {
    constructor(){
      this.subscriptions= new Map();
    }
    subscribe(event, cb){
       if(!this.subscriptions.has(event)){
         this.subscriptions.set(event, new Map());
       }
       const eventSubscriptions = this.subscriptions.get(event);
       const id = Symbol();
       
       eventSubscriptions.set(id, cb);
       
       
       return {
         release(){
           if(eventSubscriptions.has(id)){
             eventSubscriptions.delete(id)
           }else{
             throw new Error('this subscription is already released');
           }
           
         }
       }
    }
    emit(event, ...args){
      if(this.subscriptions.has(event)){
        let eventSubscriptions = this.subscriptions.get(event);
        let callbacks = eventSubscriptions.values(); 
        for(let cb of callbacks){
          cb(...args)
        }
      }
    }
   
   }