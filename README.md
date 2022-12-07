# knights-travails

I added eight different move options as well as an array that will mark an 'X' if a knight visits a square. I added a condition to test if the knight has visited a square before by seeing if that square was an 'X', and if it was, then the recursive function would return.

The PROBLEM is that the tree will only travel down the node.one path first. Instead of evaluating node.one, then node.two, then node.three, and so on, my current function evaluates node.one, then node.one.one, then node.one.one.one, and so on.

We might have to use a for loop for the levels instead of using recursive functions.
