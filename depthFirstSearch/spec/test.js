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

describe('Graph Tests', () => {
  //first pass tests
  it('Graph class should exist', () => {
    should.exist(Graph);
  });
  it('addVertex method should exist and work', () => {
    // let myGraph = new Graph();
    // should.exist(myGraph.addVertex);
    // myGraph.addVertex(3);
    // myGraph.addVertex(2);
    // myGraph.addEdge(2, 3);
    // myGraph.printGraph();
    // myGraph.removeEdge(3, 2);
    // myGraph.printGraph();
    // myGraph.removeEdge(5, 3);
    // myGraph.removeEdge(3, 2);

    let myGraphNames = new Graph();
    should.exist(myGraphNames);
    myGraphNames.addVertex('Chris');
    myGraphNames.addVertex('Uma');
    myGraphNames.addVertex('Rudy');
    myGraphNames.addVertex('Greg');
    myGraphNames.addEdge('Chris', 'Rudy');
    myGraphNames.addEdge('Uma', 'Pete');
    myGraphNames.addEdge('Chris', 'Uma');
    myGraphNames.addEdge('Uma', 'Rudy');
    myGraphNames.addEdge('Chris', 'Greg');
    myGraphNames.addEdge('Uma', 'Greg');
    myGraphNames.printGraph();

    depthFirstSearchGraph(myGraphNames, 'Chris');

  });
  // it('Graph class should exist', () => {
  //   should.exist(Graph);
  // });
  // it('Graph class should exist', () => {
  //   should.exist(Graph);
  // });

});