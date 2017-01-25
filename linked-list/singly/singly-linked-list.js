'use strict';

module.exports = exports = {};

exports.Node = function(val){
  this.val = val;
  this.next = null;
}

exports.SinglyLinkedList = function(arr){
  this.head = null;

  if(Array.isArray(arr)){
    arr.forEach(val => {
      this.prepend(val);
    });
  }
}

exports.SinglyLinkedList.prototype.prepend = function(val){
  let node  = new Node(val);

  if(!this.head){
    this.head = node;
    return node.val
  }

  node.next = this.head;
  this.head = node;
  return node.val;
}

exports.SinglyLinkedList.prototype.append = function(val){
  let node = new Node(val);
  let lastNode = null;

  if(!this.head){
    this.head = node;
    return node.val;
  }

  _setLastNode(this.head);
  lastNode.next = node;
  return node.val;

  function _setLastNode(node){
    if(!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
}


// var sll = new SinglyLinkedList([5,4,3]);
// sll.prepend(2);
// sll.prepend(1);
// sll.append(6);
// sll.append(7);
// console.log(sll);
