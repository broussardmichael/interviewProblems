//The height of a binary tree is the number of edges between the tree's root and its furthest leaf. Create a getHeight function for your search tree.
let Node = require ('./binarysearchtree/binarysearchtree');
let root = new Node(20);
root.add(10);
root.add(26);
root.add(19);
root.add(17);
root.add(18);
root.add(14);
root.add(8);
root.add(12);


let getHeight = function(root) {
    let left = -1, right = -1;
    if(root === null)
        return -1;

    if(root.left !== null) {
        left = getHeight(root.left);
    }

    if(root.right !== null) {
        right = getHeight(root.right);
    }

    return (left > right ? left : right) + 1
}