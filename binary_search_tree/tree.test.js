import Tree from "./tree"
import Node from "./node"
let testTree

afterEach(() => {
    testTree = null
})

test('initialize tree with 1 value', () => {
    testTree = Tree([1])
    expect(testTree.root.value).toBe(1)

    testTree = Tree([1,2,3,4])
    expect(testTree.root.value).toBe(3)

    testTree = Tree([1, 2, 3, 4, 5, 6, 7])
    expect(testTree.root.value).toBe(4)
    expect(testTree.root.left.value).toBe(2)
    expect(testTree.root.right.value).toBe(6)


});

test('initialize with more complex tree', () => {
    testTree = Tree([15,10,8,12, 18,25,20])
    expect(testTree.root.value).toBe(15)
});

test('initialize tree with more  values', () => {
    testTree = Tree([1, 3, 2])
    expect(testTree.root.value).toBe(2)
});


test('buildTree ordered', () => {
    testTree = Tree(null)
    expect(testTree.buildTree([1,2,3,4,5]).value).toBe(3)

    
});

test('buildTree not ordered', () => {
    testTree = Tree(null)
    expect(testTree.buildTree([5,3,2,1,4]).value).toBe(3)

    
});

test('insert value on empty tree', () => {
    testTree = Tree(null)
    testTree.insert(11)
    expect(testTree.root.value).toBe(11)
    
});

test('insert value on non-empty tree', () => {
    testTree = Tree([1, 5, 9])
    testTree.insert(11)
    expect(testTree.root.right.right.value).toBe(11)
    testTree.insert(2)
    expect(testTree.root.left.right.value).toBe(2)
    
});

test('remove root when it\'s the only  node', () => {
    testTree = Tree([1])
    testTree.remove(1)
    expect(testTree.root).toBe(null)    
});

test('remove existing (leaf) value from tree', () => {
    testTree = Tree([1, 5, 6, 9, 14, 15, 18])
    expect(testTree.root.left.left.value).toBe(1)
    testTree.remove(1)
    expect(testTree.root.left.left).toBe(null)
    testTree.remove(14)
    expect(testTree.root.right.left).toBe(null)    
});

test('remove existing (non-leaf) value from tree - only 1 child', () => {
    testTree = Tree([1, 5, 6, 9, 14, 15])
    testTree.remove(15)
    expect(testTree.root.right.value).toBe(14)
});

test('remove existing (non-leaf) value from tree - both children', () => {

    testTree = Tree([1, 5, 6, 9, 14, 15, 18])
    testTree.remove(15)
    expect(testTree.root.right.value).toBe(18)
    testTree = null
    
    
    testTree = Tree([8,10,12,15, 16, 18,19,20,30])
    expect(testTree.root.value).toBe(16)
    testTree.remove(20)
    expect(testTree.root.right.value).toBe(30)
    expect(testTree.root.right.left.value).toBe(19)
});

test('remove non-existing value from tree', () => {
    testTree = Tree([1, 5, 6, 9, 14, 15, 18])
    testTree.remove(20)
    expect(testTree.root.right.right.value).toBe(18)
    expect(testTree.root.left.left.value).toBe(1)
    expect(testTree.root.value).toBe(9)
});

test('find existing value', () => {
    testTree = Tree(null)
    let root = Node(4)
    let node1 = Node(5)
    let node2 = Node(9)
    node1.right = node2
    root.right = node1

    testTree.root = root 
    expect(testTree.find(9)[0]).toBe(node2)
});

test('find non-existing value ', () => {
    testTree = Tree(null)
    let root = Node(4)
    let node1 = Node(5)
    let node2 = Node(9)
    node1.right = node2
    root.right = node1

    testTree.root = root 
    expect(testTree.find(10)).toBe(null)
});

test('levelOrder function trasversal with function', () => {
    testTree = Tree([1, 2, 3, 4, 5, 6, 7])
    expect(testTree.levelOrder((x) => {return (x.value*3)} )).toEqual([12,6,18,3,9,15,21])
});

test('levelOrder function trasversal no function', () => {
    testTree = Tree([1, 2, 3, 4, 5, 6, 7])
    expect(testTree.levelOrder()).toEqual([4,2,6,1,3,5,7])
});

test('preOrder function trasversal no function', () => {
    testTree = Tree([1, 2, 3,  4,  5, 6, 7])
    expect(testTree.preOrder()).toEqual([4,2,1,3,6,5,7])
});

test('inorder test no function', () => {
    testTree = Tree([1, 2, 3,  4,  5, 6, 7])
    expect(testTree.inOrder()).toEqual([1,2,3,4, 5,6,7])
});

test('postOrder test no function', () => {
    testTree = Tree([1, 2, 3,  4,  5, 6, 7])
    expect(testTree.postOrder()).toEqual([1,3,2,5,7,6,4])
});

test('height function of existing node', () => {
    testTree = Tree(null)
    let root = Node(4)
    let node1 = Node(5)
    let node2 = Node(9)
    let node3 = Node(1) 
    let node4 = Node(15)
    node2.left = node4
    node1.right = node2
    root.right = node1
    root.left = node3

    testTree.root = root

    expect(testTree.height(node4)).toBe(0)

    expect(testTree.height(root)).toBe(3)

});

test('depth function of existing node', () => {
    testTree = Tree(null)
    let root = Node(9)
    let node1 = Node(10)
    let node2 = Node(118)
    let node3 = Node(1) 
    let node4 = Node(15)
    node2.left = node4
    node1.right = node2
    root.right = node1
    root.left = node3

    testTree.root = root

    expect(testTree.depth(node4)).toBe(3)

    expect(testTree.depth(root)).toBe(0)

});

test('check if the tree is balanced', () => {
    testTree = Tree(null)
    let root = Node(9)
    let node1 = Node(10)
    let node2 = Node(118)
    let node3 = Node(1) 
    let node4 = Node(15)
    node2.left = node4
    node1.right = node2
    root.right = node1
    root.left = node3

    testTree.root = root
});


test('balanced tree check ', () => {
    testTree = Tree(null)
    let root = Node(9)
    let node1 = Node(10)
    let node2 = Node(118)
    let node3 = Node(1) 
    let node4 = Node(15)
    let node5 = Node(24)
    node1.left = node4
    node1.right = node2
    node3.right = node5
    root.right = node1
    root.left = node3
    
    testTree.root = root
    expect(testTree.isBalanced()).toBe(true)

    testTree = Tree(null)
    root = Node(7)
    node3 = Node(3)
    node5 = Node(5)
    let node11 = Node(11)
    let node9 = Node(9)
    let node13 = Node(13)
    node5.left = Node(4)
    node5.right = Node(6)
    node3.left = Node(1)
    node3.right = node5
    root.left = node3

    node9.left = Node(8)
    node13.left = Node(12)
    node13.right = Node(14)
    node11.left = Node(9)
    node11.right = node13
    root.right = node11
    testTree.root = root

    expect(testTree.isBalanced()).toBe(true)
    
});

