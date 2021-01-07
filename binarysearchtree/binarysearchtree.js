//Using ES6 Classes
class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
    add(data) {
        if(data <= this.data) {
            if(this.left === null){
                this.left = new Node(data);
            } else {
                this.left.add(data);
            }
        } else {
            if(this.right === null) {
                this.right = new Node(data);
            } else {
                this.right.add(data);
            }
        }
    }
    has(data) {
        let left = this.left;
        let right = this.right;

        if(this.data === data)
            return true;

        if(data <= this.data) {
            if(left === null)
                return false;
            else
                return left.has(data);
        } else {
           if(right === null)
               return false;
           else
               return right.has(data);
        }
    }
    inOrderTraversal() {//left, root, right
        let left = this.left;
        let right = this.right;
        if(left !== null)
            left.inOrderTraversal();

        console.log(this.data);

        if(right !== null)
            right.inOrderTraversal();
    }
    preOrderTraversal() {//root, left, right
        let left = this.left;
        let right = this.right;

        console.log(this.data);

        if(left !== null)
            left.preOrderTraversal();

        if(right !== null)
            right.preOrderTraversal();

    }
    postOrderTraversal() {//left, right, root
        let left = this.left;
        let right = this.right;

        if(left !== null)
            left.postOrderTraversal();

        if(right !== null)
            right.postOrderTraversal();

        console.log(this.data);
    }
}

module.exports = Node;