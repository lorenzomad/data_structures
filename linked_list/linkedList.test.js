import { LinkedList } from "./linkedList";
import { Node } from "./node";


let testList

beforeEach(() => {  
    testList = LinkedList
})
afterEach(() => {
    testList = null
})

test('append a first node', () => {
    
    testList.append(4)
    expect(testList.headNode.value).toBe(4)
});

test('append second node', () => {

    
    
    testList.append(1)
    testList.append(2)
    expect(test.headNode.value).toBe(1)
    
});