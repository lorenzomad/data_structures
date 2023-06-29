const Node = (value) => {
    let nextNode = null;

    const setNode = (node) => {
        nextNode = node;
    }
    const printNext = () => {
        if (nextNode == null) {
            return " stop"
        } else {
            console.log(nextNode.value)
            nextNode.printNext()
        }
    }

    return {
        setNode, 
        printNext,
        get nextNode() {
            return nextNode;
        },
        value,
    }
}

export {Node}