/*
Stack
Peak:Removes top most element or displays it
Push:Adds the element
Pop:Removes element
isEmpty:if it is empty returns boolean values
length:

*/


class Stack{
 //class  classname
    constructor(){
        this.stack = []//Default property
    }
    push(elem){
        this.stack.push(elem)
    }
    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty")
        }else{
            this.stack.pop() 
        }
    }
    peak(){
        if(this.isEmpty()){
            console.log("Stack is empty")
        }else{
            console.log(this.stack[this.stack.length-1]);   
        }
    }
    isEmpty(){
        return this.stack.length === 0
    }
    length(){
        console.log(this.stack.length)
    }
}

const stack = new Stack();

stack.push(100);
stack.push(150);
stack.push(200);
stack.push(550);
console.log(stack)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log(stack.isEmpty());
console.log(stack);
stack.peak()
stack.peak()
stack.peak()