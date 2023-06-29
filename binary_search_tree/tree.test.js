import Tree from "./tree"

let testTree

afterEach(() => {
    testTree = null
})




test('initialize tree', () => {
    testTree = Tree([1, 3, 2])
    expect(testTree.root).toBe(2)
});

test('buildTree', () => {
    expect(testTree.buildTree([5,2,3,4,1])).toBe(3)

    
});