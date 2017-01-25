'use strict';

const Queue = require('./queue');

module.exports = Tree;

function Tree(val){
  this.val = val;
  this.children = [];
  this.testArr = [];
}

Tree.prototype.printTree = function(){
  let q = new Queue();
  q.enqueue(this);
  while(q.head){
    let current = q.dequeue();
    console.log(current.val);
    this.testArr.push(current.val);
    current.children.forEach(function(child){
      q.enqueue(child);
      process.stderr.write(child.val);
    })
  }
}

// let tree = new Tree('A');
// tree.children.push(new Tree('B'), new Tree('E'));
// let treeB = tree.children[0].children.push(new Tree('D'));
//
// tree.printTree();


// function Treez(val,kids){
//   this.val = val;
//   this.children = kids;
// }
//
// let a  = new Treez('A',[new Treez('B', new Treez('C'))]);
// console.log(a);
