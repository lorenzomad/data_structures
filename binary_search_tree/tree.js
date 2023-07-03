import Node from "./node";

const Tree = (array) => {
    let _array = array

    
    const buildTree = (list) => {

        const n = list.length
        if (n === 0){
            return null;
        }
        if (n === 1) {
            return Node(list[0])
        }
        // find the middle element
        const middle = Math.floor(n/2)
        list.sort((a,b) => { return (a - b)})
        const rootNode = Node(list[middle])
        const listLeft = list.slice(0, middle)
        rootNode.left = buildTree(listLeft)
        if( middle != n){
            const listRight = list.slice(middle + 1)
            rootNode.right = buildTree(listRight)
        } else {
            rootNode.right = null
        }

        _root = rootNode //not sure if this is needed actually will find out
        return rootNode
    }
    
    let _root
    if (_array == null){
        _root = null
    } else {
        _root = buildTree(_array)
    }

    const insert = (value) => {
        if (_root === null) {
            _root = Node(value)
        } else {
            let tmp = _root
            // run through the tree until you find the correct spot
            while (tmp.value != value) {
                if (value < tmp.value) {
                    if (tmp.left === null) {
                        tmp.left = Node(value)
                        return 
                    } else{
                        tmp = tmp.left
                    }
                } else if(value > tmp.value) {
                    if (tmp.right === null) {
                        tmp.right = Node(value)
                        return 
                    } else{
                        tmp = tmp.right
                    }
                }
            }
            console.log("the value is already in the tree")
            return  
        }

    } 

    const find = (value) => {
        // auxiliary function to return the node with the required value and its parent
        // also returns the ifnormation about what was the last turn
        // else it returns false
        if (_root === null) {
            return null;
        } else {
            let tmp = _root
            let prev = null // keeps track of the parent node (null if root)
            // run through the tree until you find the correct node
            let lastRight = null// keeps track if the last turn was right
            while (tmp !== null) {
                if (tmp.value === value){
                    return [tmp, prev, lastRight]
                } else if (value < tmp.value) {
                    prev = tmp
                    tmp = tmp.left
                    lastRight = 0
                } else if(value > tmp.value) {
                    prev = tmp 
                    tmp = tmp.right
                    lastRight = 1
                }
            }
            if (tmp === null) {
                return null;
            }
        }
    }

    const removeSuccessor = (value) => {
        // removes the successro node for the value given and returns the node 
        const startNode = find(value)[0]
        let parent = startNode;
        let rightNode = true;
        let tmp = startNode.right;

        // iterate until you get to the one without a left 
        // (inorder successor)
        while (tmp.left != null) {
            parent = tmp;
            tmp = tmp.left
            rightNode = false;
        }
        // if it was rightnode then replace the right part with its right
        if (rightNode) {
            parent.right = tmp.right
        } else {
            // if it was left do the opposite
            parent.left = tmp.right
        }
        // remove its successors
        tmp.right = null
        return tmp
    }
    

    const remove = (value) => {
        // removes the value from the binary search tree
        const nodes = find(value)
        if (nodes === null) {
            console.log("the value is not in the tree")
            return;
        }
        let removableNode = nodes[0]
        let parent = nodes[1]
        const lastRight = nodes[2]
         
        if (removableNode.left === null && removableNode.right === null) {
            //case in which there are no children
            if (parent === null){ 
                _root = null
            } else {
                if (lastRight === 1) {
                    parent.right = null 
                } else {
                    parent.left = null
                }
            } 
        } else if (removableNode.right != null && removableNode.left != null) {
            // complicated case with both children
            // find the successor node
            const successor = removeSuccessor(removableNode.value) 
            removableNode.value = successor.value
        } else {
            //case in which there is just one child (replace the link with the parent)
            if (removableNode.right != null) {
                if (lastRight === 1) {
                    parent.right = removableNode.right
                } else {
                    parent.left = removableNode.right
                }
            } else {
                if (lastRight ===1 ){
                    parent.right = removableNode.left
                } else {
                    parent.left = removableNode.left
                }
            }
        }
    }

    const levelOrder = (funct = (x) => {return x.value}) => {
        // trasverse the tree by level and performs the function on the values
        let output = []
        let queue  = []
        queue.push(_root)
        let tmp = null
        
        while (queue.length > 0 ) {
            tmp = queue.shift()
            if (tmp != null) {
                output.push(funct(tmp))
                if (tmp.left != null) {
                    queue.push(tmp.left);
                } 
                if (tmp.right != null) {
                    queue.push(tmp.right);
                }
            }
        }
        return output
    }

    const preOrder = (node = _root, funct = (x) => {return x.value}) => {
        // trasverse the tree by preorder method and performs the function on the values
        // preorder is root, left , right
        let output = []
        output.push(funct(node))

        if (node.left != null) {
            output.push.apply(output, preOrder(node.left, funct))
        }
        if (node.right != null) {
            output.push.apply(output, preOrder(node.right, funct))
        }
        return output;
    }

    const inOrder = (node = _root, funct = (x) => {return x.value}) => {
        // trasverse the tree by inorder method and performs the function on the values
        // preorder is left, root , right 
        let output = []
        

        if (node.left != null) {
            output.push.apply(output, inOrder(node.left, funct))
        }
        output.push(funct(node))
        if (node.right != null) {
            output.push.apply(output, inOrder(node.right, funct))
        }
        return output;
    }

    const postOrder = (node = _root, funct = (x) => {return x.value}) => {
        // trasverse the tree by postOrder method and performs the function on the values
        // preorder is left, right root 
        let output = []
        
        if (node.left != null) {
            output.push.apply(output, postOrder(node.left, funct))
        }
        if (node.right != null) {
            output.push.apply(output, postOrder(node.right, funct))
        }
        output.push(funct(node))
        return output;
    }

    const height = (node) => {
        // returns length up to the leaf towards the bottom
        if (node == null ) {
            return null
        }
        if (node.left == null && node.right == null){
            //leaf node 
            return 0;
        } else {
            const leftHeight = height(node.left) + 1
            const rightHeight = height(node.right) + 1
            return Math.max(leftHeight, rightHeight);
        }
        
    }



    return {
        buildTree,
        insert,
        remove,
        find, 
        levelOrder,
        preOrder,
        inOrder,
        postOrder,
        height,

        get root () {
            return _root
        },
        set root (root){
            _root = root
        }   
    }
}

export default Tree