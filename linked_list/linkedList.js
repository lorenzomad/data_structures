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
    }

}

export default LinkedList 