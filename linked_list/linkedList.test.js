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

test('prepend when there is no node', () => {    
    testList.prepend(4)
    expect(testList.listHead.value).toBe(4)
});

test('prepend when first node already exists', () => {
    testList.listHead = Node(4)
    testList.prepend(2)
    expect(testList.listHead.value).toBe(2)
    expect(testList.listHead.nextNode.value).toBe(4)
        
});

test('check size of list with no nodes', () => {
    expect(testList.size()).toBe(0)
});

test('check size of list with 2 nodes', () => {
    testList.listHead = Node(1)
    testList.listHead.nextNode = Node(2)
    expect(testList.size()).toBe(2)
    
});

test('head of empty list', () => {
    expect(testList.head()).toBe(null)
});

test('head of non-empty list ', () => {
    
    const node1 = Node(1)
    testList.listHead = node1
    expect(testList.head()).toBe(node1)
    const node2 = Node(2)
    testList.listHead.nextNode = node2
    expect(testList.head()).toBe(node1)
    
});

test('tail of empty list', () => {
    expect(testList.tail()).toBe(null)
});

test('tail of non-empty list', () => {
    const node1 = Node(1)
    testList.listHead = node1
    expect(testList.tail()).toBe(node1)
    const node2 = Node(2)
    testList.listHead.nextNode = node2
    expect(testList.tail()).toBe(node2)
});


test('at existing index', () => {
    const node1 = Node(1)
    testList.listHead = node1
    const node2 = Node(2)
    testList.listHead.nextNode = node2
    expect(testList.at(0)).toBe(node1)
    expect(testList.at(1)).toBe(node2)
});

test('at non existing index', () => {
    expect(testList.at(3)).toBe(null)
});

test('pop when no item', () => {
    testList.pop()
    expect(testList.listHead).toBe(null)
});

test('pop when existing item', () => {
    const node1 = Node(1)
    testList.listHead = node1
    const node2 = Node(2)
    testList.listHead.nextNode = node2
    testList.pop()
    expect(testList.listHead.nextNode).toBe(null)
});

test('pop when 1 item', () => {
    const node1 = Node(1)
    testList.listHead = node1
    testList.pop()
    expect(testList.listHead).toBe(null)
});

test('contains valid', () => {
    const node1 = Node(1)
    testList.listHead = node1
    const node2 = Node(5)
    testList.listHead.nextNode = node2
    expect(testList.contains(5)).toBe(true)
});

test('contains invalid', () => {
    const node1 = Node(1)
    testList.listHead = node1
    const node2 = Node(5)
    testList.listHead.nextNode = node2
    expect(testList.contains(2)).toBe(false)
});

test('find valid', () => {
    const node1 = Node(1)
    testList.listHead = node1
    const node2 = Node(5)
    testList.listHead.nextNode = node2
    const node3 = Node(10)
    testList.listHead.nextNode.nextNode = node3
    expect(testList.find(1)).toBe(0)
    expect(testList.find(5)).toBe(1)
    expect(testList.find(10)).toBe(2)
});

test('contains invalid', () => {
    const node1 = Node(1)
    testList.listHead = node1
    const node2 = Node(5)
    testList.listHead.nextNode = node2
    expect(testList.find(2)).toBe(null)
});

test('toString of empty list', () => {
    expect(testList.toString()).toBe("null")
});

test('toString non empty list', () => {
    const node1 = Node(1)
    testList.listHead = node1
    const node2 = Node(5)
    testList.listHead.nextNode = node2
    const node3 = Node(10)
    testList.listHead.nextNode.nextNode = node3
    expect(testList.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> null")
});