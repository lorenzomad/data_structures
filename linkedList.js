import Node from "./node.js"

const LinkedList = () => {
    
    const listHead = null

    const prepend = (value) => {
        const  second = listHead
        listHead= Node(value)
        listHead.setNode(second)
    }

    const append = (value) => {
        tmp = listHead
        if (listHead === null) {
            listHead = Node(value)
        } else {
          while(tmp.nextNode != null) {
            tmp = tmp.nextNode
          } 
          tmp.setNode(value)
        }
    }


    const printList = () => {
        listHead.printNext()
    }

    return {
        get listHead() {
            return listHead
        },
        append,
        prepend
    }

}

export {LinkedList}