// <!-- Activity - 1 -->
// Task 1: Implement a node class to represent an element 
// in a linked list with properties value and next class

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// Task 2: Implement a LinkedList class with methods to add and node to the end. 
// remove a node from the end. and display all notes.
// class LinkedList {
//     constructor(){
//         this.head = null;
//     }

//     add(value){
//         const newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while(current.next){
//             current = current.next;
//         }
//         current.next = newNode;
//     }
//     remove(){
//         if (!this.head) return null;
//         if (!this.head.next){
//             const value = this.head.value;
//             this.head = null;
//             return value;
//         }
//         let current = this.head;
//         while(current.next.next){
//             current = current.next;
//         }
//         const value = current.next.value;
//         current.next = null;
//         return value;
//     }

//     display(){
//         let current = this.head;
//         while (current){
//             console.log(current.value);
//             current = current.next;
//         }
//     }
// }
// Task 3: implement a stack class with methods push (add element), 
// pop (remove element) and peek (view the top element).
// class stack{
//     constructor(){
//         this.stack = [];
//     }
//     push(value){
//         this.stack.push(value);
//     }
//     pop(){
//         return this.stack.pop();
//     }
//     peek(){
//         return this.stack[this.stack.length - 1];
//     }
// }

// Task 4: use the stack class to reverse a string by pushing all characters 
// onto the stack and then popping them off.
// function reversestring(input){
//     const stack = new Stack();
//     for (const char of input){
//         stack.push(char);
//     }
//     let reversed = '';
//     while (stack.peek() !== undefined){
//         reversed += stack.pop();
//     }
//     return reversed;
// }
// console.log(reversestring("Hello"));

// Task 5: implement a queue class with methods enqueue(add element), 
// dequeue (remov element) and front (view the first element).

// class Queue{
//     constructor(){
//         this.queue = [];
//     }
//     enqueue(value){
//         this.queue.push(value);
//     }
//     dequeue(){
//         return this.queue.shift();
//     }
//     front(){
//         return this.queue[0];
//     }
// }
// Task 6: use the Queue class to simulate a simple printer Queue 
// where print jobs are added to the queue and processd in order.
// class PrinterQueue {
//     constructor() {
//         this.queue = new Queue();
//     }
//     addPrintJob(job){
//         this.queue.enqueue(job);
//     }
//     processPrintJob(){
//         const job = this.queue.dequeue();
//         if(job){
//             console.log(`Printing job: ${job}`);
//         } else {
//             console.log("No Jobs to Print");
//         }
//     }
// }
// const printerQueue = new PrinterQueue();
// printerQueue.addPrintJob("Job 1");
// printerQueue.addPrintJob("Job 2")
// printerQueue.processPrintJob();
// printerQueue.processPrintJob();
// printerQueue.processPrintJob();
// Task 7: implement of TreeNode Class to represent 
// a node in a binary tree with properties value, left and right.
class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// Task 8: Implement a Binarytree class with methods for inserting values 
// and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        this._insertNode(this.root, newNode);
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal() {
        this._inOrderTraversal(this.root);
    }

    _inOrderTraversal(node) {
        if (node) {
            this._inOrderTraversal(node.left);
            console.log(node.value);
            this._inOrderTraversal(node.right);
        }
    }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.inOrderTraversal(); // Output: 2 3 4 5 7

// Task 9: Implement a graph class with methods to add vertices, add edges, and perform a breadth-first-search(BFS).
// Task 10: Use the graph class to represent a simple Network and perform BFS to find the shortest path between two nodes.