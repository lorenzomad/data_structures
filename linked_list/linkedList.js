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


    const printList = () => {
        _listHead.printNext()
    }

    return {
        get listHead() {
            return _listHead
        },
        set listHead(Node) {
            _listHead = Node
        },
        append,
        prepend
    }

}

export default LinkedList 