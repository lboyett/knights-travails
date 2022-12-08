let board = [];
for (let i = 0; i < 8; i++) {
  board[i] = [];
  for (let j = 0; j < 8; j++) {
    board[i][j] = [i, j];
  }
}

let counter = 0;
function labelSquares() {
  const squares = document.querySelectorAll(".square");
  let i = 0;
  for (let y = 7; y >= 0; y--) {
    for (let x = 0; x <= 7; x++) {
      squares[i].textContent = `${x},${y}`;
      i++;
    }
  }
  return squares;
}
let squares = labelSquares();
function colorSquares(squares, position) {
  squares.forEach((square) => {
    if (position.toString() == square.textContent) {
      square.style.backgroundColor = "gray";
    }
  });
}

let nodeArray = [];
let heightArray = [];

class Node {
  constructor(
    position,
    one = null,
    two = null,
    three = null,
    four = null,
    five = null,
    six = null,
    seven = null,
    eight = null,
    height = null
  ) {
    this.position = position;
    this.one = one;
    this.two = two;
    this.three = three;
    this.four = four;
    this.five = five;
    this.six = six;
    this.seven = seven;
    this.eight = eight;
    this.height = height;
    colorSquares(squares, position);
  }
}

class Tree {
  constructor(start, end) {
    this.root = this.buildTree(start, end);
  }

  buildTree([x, y], [a, b]) {
    if (x > 7 || x < 0 || y > 7 || y < 0) return null;
    if (board[x][y] === "X") return null;
    board[x][y] = "X";
    let node = new Node([x, y]);
    if (x == a && y == b) {
      console.log("DONEEEEEEE");
      node.height = 1;
      console.log("bet: " + node.height);
      return node;
    }
    while (x != a && y != b && x >= 0 && x <= 7 && y >= 0 && y <= 7) {
      nodeArray.push([x + 1, y + 2]);
      nodeArray.push([x + 2, y + 1]);
      node.one = this.buildTree(nodeArray.shift(), [a, b]);
      console.log(node.one.height);
      node.height = 1 + node.one.height;
      console.log(node.one);
      node.two = this.buildTree(nodeArray.shift(), [a, b]);
      // let minHeight = Math.min(node.one, node.two);
      // console.log("MIN " + minHeight);
      return node;
    }
    // node.one = this.buildTree([x + 1, y + 2]);
    // node.two = this.buildTree([x + 2, y + 1]);
    // node.three = this.buildTree([x - 1, y - 2]);
    // node.four = this.buildTree([x - 2, y - 1]);
    // node.five = this.buildTree([x + 1, y - 2]);
    // node.six = this.buildTree([x - 1, y + 2]);
    // node.seven = this.buildTree([x + 2, y - 1]);
    // node.eight = this.buildTree([x - 2, y + 1]);
    // return node;
  }
}

function knightMoves(start, end) {
  const tree = new Tree(start, end);
  return tree;
}

let start = [0, 0];
let end = [3, 3];

console.log(knightMoves(start, end));

// ******************************************************************
// board = [];
// for (let i = 0; i < 8; i++) {
//   board[i] = [];
//   for (let j = 0; j < 8; j++) {
//     board[i][j] = [i, j];
//   }
// }
// const prettyPrint = (node, prefix = '', isLeft = true) => {
//   if (node.one !== null) {
//     prettyPrint(node.one, `${prefix}${isLeft ? '│   ' : '    '}`, false);
//   }
//   console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.position}`);
//   if (node.two !== null) {
//     prettyPrint(node.two, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//   }
//   if (node.three !== null) {
//     prettyPrint(node.three, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//   }
//   if (node.four !== null) {
//     prettyPrint(node.four, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//   }
//   if (node.five !== null) {
//     prettyPrint(node.five, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//   }
//   if (node.six !== null) {
//     prettyPrint(node.six, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//   }
//   if (node.seven !== null) {
//     prettyPrint(node.seven, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//   }
//   if (node.eight !== null) {
//     prettyPrint(node.eight, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//   }
// };
// prettyPrint(tree.buildTree(position));
