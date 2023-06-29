import Node from "./node";
import LinkedList from "./linkedList"


let testList

beforeEach(() => {  
    testList = LinkedList()
})
afterEach(() => {
    testList = null
})

test('append a first node', () => {
    
    testList.append(4)
    expect(testList.listHead.value).toBe(4)
});

test('append second node check first 2 values', () => {
    
    
    testList.listHead = Node(4)
    testList.append(2)
    expect(testList.listHead.value).toBe(4)
    expect(testList.listHead.nextNode.value).toBe(2)
        
});