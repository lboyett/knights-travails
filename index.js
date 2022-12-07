console.clear();
let position = [3, 3];
let board = [];
for (let i = 0; i < 8; i++) {
  board[i] = [];
  for (let j = 0; j < 8; j++) {
    board[i][j] = [i, j];
  }
}

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
    eight = null
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
  }
}

class Tree {
  constructor(position) {
    this.root = this.buildTree(position);
  }

  buildTree([x, y]) {
    if (x > 7 || x < 0 || y > 7 || y < 0) return null;
    if (board[x][y] === 'X') return null;
    board[x][y] = 'X';
    let node = new Node([x, y]);
    node.one = this.buildTree([x + 1, y + 2]);
    node.two = this.buildTree([x + 2, y + 1]);
    node.three = this.buildTree([x - 1, y - 2]);
    node.four = this.buildTree([x - 2, y - 1]);
    node.five = this.buildTree([x + 1, y - 2]);
    node.six = this.buildTree([x - 1, y + 2]);
    node.seven = this.buildTree([x + 2, y - 1]);
    node.eight = this.buildTree([x - 2, y + 1]);
    return node;
  }
}

const tree = new Tree(position);
console.log(tree)

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
