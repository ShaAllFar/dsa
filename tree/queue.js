'use strict';

const sll = require('./singly-linked-list.js');

module.exports = Queue;

function Queue(){
  new sll.SinglyLinkedList();
}

Queue.prototype.dequeue = function(){
  let current = this.head;
  this.head = current.next;

  return current.val;
}

Queue.prototype.enqueue = function(val){
  let node = new sll.Node(val);

  if(!this.head){
    this.head = node;
    this.tail = node;
    return;
  }

  this.tail.next = node;
  this.tail = node;

  return;
}
