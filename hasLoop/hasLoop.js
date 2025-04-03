class loopNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class loopLinkedList {
    constructor(value) {
        const newNode = new loopNode(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new loopNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    hasLoop() {
        let slow = this.head;
        let fast = this.head;


        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast === slow) {
                return true;
            }
        }
        return false;



    }

}



let linkedList = new loopLinkedList(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);

console.log("Original list:");
linkedList.printList();

const hasLoopResult = linkedList.hasLoop();
console.log(`\nHas loop? ${hasLoopResult}`);

// Create a loop for testing purposes
linkedList.tail.next = linkedList.head.next; // Create a loop by linking tail to the second node

const hasLoopResultAfterLoop = linkedList.hasLoop();
console.log(`\nHas loop after creating a loop? ${hasLoopResultAfterLoop}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    Has loop? false
    Has loop after creating a loop? true
*/
