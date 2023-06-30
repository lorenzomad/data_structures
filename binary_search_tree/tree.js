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

    return {
        buildTree,
        insert,
        get root () {
            return _root
        },
        set root (root){
            _root = root
        }   
    }
}

export default Tree