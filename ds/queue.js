/*
FIFO:First in first out
LILO:Last in last out
Queue:enqueue, dequeue, front, rear, isEmpty, length
*/

class Queue{
    constructor(){
        this.queue=[]
    }
    enqueue(elem){
        this.queue.push(elem)
    }
    dequeue(){
        if(!this.isEmpty())this.queue.shift();
        else console.log("Queue is Empty");
    }
    front(){
        console.log(this.queue[0]);
    }
    rear(){
        if(!this.isEmpty())console.log(this.queue[this.queue.length-1])
        else console.log("Queue is Empty");
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    length(){
        this.queue.length;
    }
}

const queue=new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue);
queue.dequeue()
queue.front()
queue.rear()