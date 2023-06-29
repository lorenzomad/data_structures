import Node from "./node"

const LinkedList = () => {

    let _listHead = null    

    const append = (value) => {
        if (_listHead == null) {
            _listHead = Node(value)
        } else {
            let tmp = _listHead
            while (tmp.nextNode != null) {
                tmp = tmp.nextNode
            }
            tmp.setNode(Node(value))
        }
    }

    const prepend = (value) => {
        if (_listHead === null) {
            _listHead = Node(value)
        } else {
            const second = _listHead
            _listHead = Node(value)
            _listHead.setNode(second)
        }   
    }

    const size = () => {
        let size = 0
        if (_listHead === null) {
            return size
        } else {
            size++;
            let tmp = _listHead 
            while(tmp.nextNode != null) {
                size++;
                tmp = tmp.nextNode
            }
            return size
        }
    }

    const head = () => {
        return _listHead
    }

    const tail = () => {
        if (_listHead === null) {
            return null;
        } else {
            let tmp = _listHead
            while(tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }
            return tmp
        }
    }

    const at = (index) => {
        if (index < 0) {
            console.log("choose a valid positive integer index")
            return;
        }
        if (_listHead === null) {
            return _listHead
        }
        let tmp = _listHead
        while (index > 0) {
            if (tmp.nextNode === null) {
                return tmp.nextNode
            }
            tmp = tmp.nextNode
            index--
        }
        return tmp
    }

    const pop = () => {
        if (_listHead != null){
            // size 1 case
            if (_listHead.nextNode === null) {
                _listHead = null
            } else{
                let tmp = _listHead
                let prev = null
                while(tmp.nextNode != null) {
                    // keep track of the previous until i move to last  
                    prev = tmp
                    tmp = tmp.nextNode
                }
                prev.nextNode = null
            }
            
        } 
    }

    const contains = (value) => {
        if (_listHead === null) {
            return false;
        } else {
            let tmp = _listHead
            while(tmp != null) {
                if (tmp.value === value) { 
                    return true;
                } 
                tmp = tmp.nextNode
            }
            return false;
        }

    }

    

    const printList = () => {
        _listHead.printNext()
    }

    return {
        get listHead() {
            return _listHead
        },
        set listHead(node) {
            _listHead = node
        },
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
    }

}

export default LinkedList 