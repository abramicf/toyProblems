describe('Depth First Search', () => {
  //first pass tests
  it('should exist', () => {
    should.exist(depthFirstSearch);
  });

  it('works on a basic tree', () => {
    let tree = new TreeNode(1);
    tree.children[0] = new TreeNode(2);
    tree.children[1] = new TreeNode(3);
    tree.children[0].children[0] = new TreeNode(4);
    tree.children[1].children[0] = new TreeNode(5);

    let result = depthFirstSearch(tree);
    console.log(result);
    result.should.equal(0);
  });
});
