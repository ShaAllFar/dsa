const Tree = require('./tree');

let t = new Tree('A');
t.children.push(new Tree('B'),new Tree('C'));
t.children[0].children.push(new Tree('D'));
t.children[1].children.push(new Tree('E'), new Tree('F'));

t.printTree();

console.assert(t.val === 'A','not A');
console.assert(t.children[0].val === 'B', 'not B');
console.assert(t.children[1].val === 'C', 'not C');
console.assert(t.children[0].children[0].val === 'D', 'not D');
console.assert(t.children[1].children[0].val === 'E', 'not E');
console.assert(t.children[1].children[1].val === 'F', 'not F');
console.assert(t.testArr.toString() === 'A,B,C,D,E,F', 'not Equal');

console.log('All Tests Passed');
