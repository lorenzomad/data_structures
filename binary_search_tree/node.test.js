import Node from "./node"
let testNode 

beforeAll(() => {
    testNode = Node(4) 
})

test('test value', () => {
    expect(testNode.value).toBe(4)
});

test('test left', () => {
    node1 = Node(3)
    testNode.left = node1
    expect(testNode.left).toBe(node1)
});

test('test right', () => {
    node1 = Node(3)
    testNode.right = node1
    expect(testNode.right).toBe(node1)
});