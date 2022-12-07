// insert text content indicating position of square
let counter = 0;
const squares = document.querySelectorAll('.square')
console.log(squares);
let i = 0;
for (let y=7; y>=0; y--) {
    for (let x=0; x<=7; x++) {
        squares[i].textContent = `${x},${y}`;
        i++;
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
        // color a square gray if a node matching its position is created
        squares.forEach(square => {
            if (position.toString() == square.textContent) {
                square.style.backgroundColor = 'gray';
            }
        })
    }
}

class Tree {
    constructor([x,y]) {
        this.root = this.buildTree([x,y]);
    }
    buildTree([x,y]) {
        if ((x>7 || x<0) || (y>7 || y<0)) return null;

        let bool;
        squares.forEach(square => {
            if ((square.style.backgroundColor == 'gray') 
            && ([x,y].toString() == square.textContent)) bool = true;})
        if (bool) return null;

        let node = new Node ([x,y]);
        node.one = new Tree ([x+1,y+2]);
        node.two = new Tree ([x+2,y+1]);
        node.three = new Tree ([x-1,y+2]);
        node.four = new Tree ([x-2,y+1]);
        node.five = new Tree ([x+1,y-2]);
        node.six = new Tree ([x+2,y-1]);
        node.seven = new Tree ([x-1,y-2]);
        node.eight = new Tree ([x-2,y-1]);
        console.log(++counter);
        return node
    }
}


let board = new Tree ([3,3]);
console.log(board);

// if ((x>7 || x<0) || (y>7 || y<0))
