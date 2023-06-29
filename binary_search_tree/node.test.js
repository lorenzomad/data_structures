import Node from "./node"
let testNode 

beforeEach(() => {
    testNode = Node(4) 
})

afterEach(() => {
    testNode = null
})

test('test value', () => {
    expect(testNode.value).toBe(4)
});

test('test left', () => {
    const mockNode = 5
    testNode.left = mockNode
    expect(testNode.left).toBe(mockNode)
});

test('test right', () => {
    const mockNode = 3
    testNode.right = mockNode
    expect(testNode.right).toBe(mockNode)
});