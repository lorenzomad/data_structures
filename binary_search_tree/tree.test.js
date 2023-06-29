import Tree from "./tree"

let testTree

afterEach(() => {
    testTree = null
})

test('initialize tree with 1 value', () => {
    testTree = Tree([1])
    expect(testTree.root.value).toBe(1)
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