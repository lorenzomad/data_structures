import { Node } from "./node";

test('set value', () => {
    const testNode = Node(10)
    expect(testNode.value).toBe(10)
});

test('set Next node', () =>{
    const testNode = Node(2)
    const secondNode = Node(4)
    testNode.setNode(secondNode)
    expect(testNode.nextNode).toBe(secondNode)
})