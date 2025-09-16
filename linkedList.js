class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    displayNode() {
        console.log(this.value);
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // add or append function to add element at the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // add or prepend function to add element at the beginning of the list
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // add or insert function to add element at a specific index in the list
    insert(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Invalid index");
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const newNode = new Node(value);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    // remove function to remove element at a specific index in the list
    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Invalid index");
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = current.next.next;
        }
        this.size--;
    }

    // remove from front function to remove element from the beginning of the list
    removeFromFront() {
        if (!this.head) {
            throw new Error("List is empty");
        }
        this.head = this.head.next;
        this.size--;
    }
    
    // remove from end function to remove element from the end of the list
    removeFromEnd(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Invalid index");
        }
        let current = this.head;
        let previous = null;
        while (current && index > 0) {
            previous = current;
            current = current.next;
            index--;
        }
        if (!current) {
            throw new Error("Invalid index");
        }
        if (previous) {
            previous.next = current.next;
        } else {
            this.head = current.next;
        }
        this.size--;
    }

    // display function to print the list
    display() {
        let current = this.head;
        while (current) {
            current.displayNode();
            current = current.next;
        }
    }
}

// Example usage:
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.insert(15, 2);
list.display();
list.remove(2);
list.display();
list.removeFromFront();
list.display();
//list.removeFromEnd();
//list.display();