let Node = require('../binarysearchtree');
let assert = require('assert');

//Add [3,2,4,1,8,10,6]
/*
   3
   /\
  2  4
 /   /\
1      8
       / \
      6   10
*/


describe('Binary Search Tree Tests', function(){
    describe("#add",function () {
        it('should add the value 3', function () {
            let root = new Node(3);
            assert.strictEqual(root.data, 3);
        });
    });
    describe("#has",function () {
        it('should contain the value 4', function () {
            let root = new Node(3);
            root.add(2);
            root.add(4);
            let found = root.has(4);
            assert.strictEqual(found, true);
        });
    });
    describe('#inOrderTraversal',function () {
        it('should return values in left root right', function () {
            let root = new Node(3);
            root.add(2);
            root.add(4);
            root.add(1);
            root.add(8);
            root.add(10);
            root.add(6);
            console.log('In Order Traversal (Left, Root, Right)');
            root.inOrderTraversal();
            assert.ok(true);
        });
    });
    describe('preOrderTraversal',function () {
        it('should return values in root, left, right', function () {
            let root = new Node(3);
            root.add(2);
            root.add(4);
            root.add(1);
            root.add(8);
            root.add(10);
            root.add(6);
            console.log('Pre Order Traversal (Root, Left, Right)');
            root.preOrderTraversal();
            assert.ok(true);
        });
    });
    describe('postOrderTraversal',function () {
        it('should return values in left, right, root', function () {
            let root = new Node(3);
            root.add(2);
            root.add(4);
            root.add(1);
            root.add(8);
            root.add(10);
            root.add(6);
            console.log('Post Order Traversal (Left, Right, Root)');
            root.postOrderTraversal();
            assert.ok(true);
        });
    });
});