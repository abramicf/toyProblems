class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Graph {
  constructor() {
    this.storage = {};
    this.numberOfEdges = 0;
  }

  addVertex(vertex) {
    if (!this.storage[vertex]) {
      this.storage[vertex] = []; //create empty edges array
    }
    //if it already exists, don't do anything!
  }

  removeVertex(vertex) {
    //first, check if vertex exists in the graph
  }

  addEdge(vertex1, vertex2) {
    //Assumes we'll add the second vetex to the graph if it's not there already
    //Check whether both are there and create them if they're not
    if (!this.storage[vertex1]) {
      addVertex(vertex1);
    }
    if (!this.storage[vertex2]) {
      addVertex(vertex2);
    }
    //add vertex2 to the array for vertex1
    this.storage[vertex1].push(vertex2);
    //add vertex1 to the array for vertex2
    this.storage[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    //if one or both verticies aren't in the graph
    if (!this.storage[vertex1] || !this.storage[vertex2]) {
      let message = 'verticies not in this graph';
      console.log(message);
      return message;
    }

    //if the edge doesn't exist
    if (!this.storage[vertex1].includes(vertex2) || !this.storage[vertex2].includes(vertex1)) {
      let message = 'edge does not exist';
      console.log(message);
      return message;
    }

    let edgeRemoved = [];
    // console.log(this.storage);
    // console.log(this.storage[vertex2]);
    let firstIndex = this.storage[vertex1].indexOf(vertex2);
    let firstRemoved = this.storage[vertex1].splice(firstIndex, 1);
    // console.log(firstRemoved);
    edgeRemoved.push(firstRemoved);
    let secondIndex = this.storage[vertex2].indexOf(vertex1);
    let secondRemoved = this.storage[vertex2].splice(secondIndex, 1);
    // console.log(secondRemoved);
    edgeRemoved.push(secondRemoved);
    // console.log(edgeRemoved);
    //if the edge does exist
  }

  printGraph() {
    for (let prop in this.storage) {
      console.log(prop + ' : ' + this.storage[prop]);
    }
  }
}

//traverse a graph!

//you'd have to have an entry point
//you'd have to

//traverse a tree


// works (get the stuff from the bottom)
// depthFirstSearch = (root) => {
//   let result = [];
//   let subroutine = (node, depth) =>{
//     if (node.children.length === 0) {
//       result.push([node.value, depth]);
//       return;
//     } else {
//       for (let i = 0; i < node.children.length; i++) {
//         let item = node.children[i];
//         subroutine(item, depth + 1);
//       }
//       result.push([node.value, depth]);
//     }
//   };
//   subroutine(root, 0);
//   return result;
// };

//works (get the stuff from the top)
// depthFirstSearch = (root) => {
//   let result = [];
//   let subroutine = (node, depth) =>{
//     if (node.children.length === 0) {
//       result.push([node.value, depth]);
//       return;
//     } else {
//       result.push([node.value, depth]);
//       for (let i = 0; i < node.children.length; i++) {
//         let item = node.children[i];
//         subroutine(item, depth + 1);
//       }
//     }
//   };
//   subroutine(root, 0);
//   return result;
// };

//depth first search (top down with no base case)
// depthFirstSearch = (root) => {
//   let result = [];
//   let subroutine = (node, depth) =>{
//     result.push([node.value, depth]);
//     for (let i = 0; i < node.children.length; i++) {
//       let item = node.children[i];
//       subroutine(item, depth + 1);
//     }
//   };
//   subroutine(root, 0);
//   return result;
// };





