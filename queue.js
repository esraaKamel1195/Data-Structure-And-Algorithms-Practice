// FIFO (First In, First Out)
// Queue implementation using linked list

// Node class to represent each element in the queue
class NodeOfQueue {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    displayNode() {
        console.log('this.value', this.value, 'this.next', this.next );
    }
}

// Queue class to manage the queue operations using linked list
class LinkedListQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new NodeOfQueue(value);
        console.log('newNode', newNode);
        if (!this.rear) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) {
            console.log("Queue is empty");
            return null;
        }
        const removedNode = this.front;
        this.front = this.front.next;
        this.size--;
        removedNode.displayNode();
        return removedNode.value;
    }

    peek() {
        if(!this.front) {
            console.log("Queue is empty");
            return null;
        }
        return this.front.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

// implement queue using array
class ArrayQueue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getSize() {
        return this.items.length;
    }
}

// implement queue using array with fixed size
class ArrayQueueWithFixedSize {
    // constructor
    constructor(length = 5) {
        this.items = new Array(length);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
        this.ArrayLength = length;
    }

    enqueue(value) {
        if(this.size === this.ArrayLength) {
            console.log("Queue is full");
            return;
        }

        this.items[this.rear] = value;
        this.rear = (this.rear + 1) % this.ArrayLength;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        const dequeuedValue = this.items[this.front];
        this.front = (this.front + 1 ) % this.ArrayLength;
        this.size--;
        return dequeuedValue;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        return this.items[this.front];
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

// Example usage:
const linkedListQueue2 = new LinkedListQueue();
console.log(linkedListQueue2.dequeue());
console.log(linkedListQueue2.peek());
console.log(linkedListQueue2.isEmpty());
console.log(linkedListQueue2.getSize());
linkedListQueue2.enqueue(10);
linkedListQueue2.enqueue(20);
linkedListQueue2.enqueue(30);
console.log(linkedListQueue2.dequeue());  // 10
console.log(linkedListQueue2.peek()); // 20
console.log(linkedListQueue2.isEmpty()); // false
console.log(linkedListQueue2.getSize()); // 2

// Example usage:
const arrayQueue = new ArrayQueue();
arrayQueue.enqueue(30);
arrayQueue.enqueue(40);
console.log(arrayQueue.dequeue());   // 30
console.log(arrayQueue.peek());  // 40
console.log(arrayQueue.isEmpty()); // false
console.log(arrayQueue.getSize()); // 2

// Example usage:
const arrayQueueWithFixedSize = new ArrayQueueWithFixedSize(3);
arrayQueueWithFixedSize.enqueue(100);
arrayQueueWithFixedSize.enqueue(200);
arrayQueueWithFixedSize.enqueue(300);
arrayQueueWithFixedSize.enqueue(400); // Queue is full
console.log(arrayQueueWithFixedSize.dequeue());   // 100
console.log(arrayQueueWithFixedSize.peek());  // 200
console.log(arrayQueueWithFixedSize.isEmpty()); // false
console.log(arrayQueueWithFixedSize.getSize()); // 2
arrayQueueWithFixedSize.enqueue(400);
console.log(arrayQueueWithFixedSize.getSize()); // 3
arrayQueueWithFixedSize.enqueue(500); // Queue is full
console.log(arrayQueueWithFixedSize.dequeue());   // 200



// time complexity of enqueue and dequeue is O(1) for linked list implementation and O(n) for array implementation
// space complexity is O(n) for both implementations
// Queue can be used in breadth first search, job scheduling, handling requests in web servers etc.
// Circular Queue can be implemented using array and linked lists for better memory utilization.
// Deque (Double Ended Queue) can be implemented using linked list and array for adding and removing elements from both ends.
// Priority Queue can be implemented using heaps for efficient retrieval of highest (or lowest) priority element.
// Exporting the Queue and ArrayQueue classes for use in other modules

module.exports = { LinkedListQueue, ArrayQueue };