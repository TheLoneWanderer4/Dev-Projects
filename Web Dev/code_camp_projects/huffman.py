""""
File: huffman.py
Author: Amin Sennour
Purpose: implmenting huffman encoding
Course: CSC 120 Spring
"""

import sys

sys.setrecursionlimit(1500)

class binary_tree:
    def __init__(self, value):
        ''' special method init '''
        self._value  = value
        self._left = None
        self._right = None
    def right(self):
        ''' getter '''
        return self._right
    def left(self):
        ''' getter '''
        return self._left
    def value(self):
        ''' getter '''
        return self._value
    def set_right(self, value):
        ''' setter '''
        self._right = value
    def set_left(self, value):
        ''' setter '''
        self._left = value

def proccess_order(tree, prelist, inlist):
    '''
    function to proccess the transversal lists into a tree
    Paramiters: tree, the tree being built on, None on the first call
                prelist: the list gotten of the pre order traversal
                inlist: the list gotten of the in order traversal
    Return: recursion:
            base: one, or both, of the lists is empty, return None
            recursive: populate tree with a new binary_tree, determine the left
            and right lists, and recurse on the subtrees
    Pre-condition: prelist and inlist partain to the same tree
    Post-condition: a correctly built tree has been returned
    '''
    if len(prelist) == 0 or len(inlist) == 0:
        return None
    else:
        tree = binary_tree(prelist[0])

        left_inlist = inlist[0:inlist.index(prelist[0])]
        right_inlist = inlist[inlist.index(prelist[0]) + 1:]

        prelist = prelist[1:]

        left_prelist = prelist[0:len(left_inlist)]
        right_prelist = prelist[len(left_inlist):]

        tree.set_left(proccess_order(tree.left(), left_prelist, left_inlist))
        tree.set_right(proccess_order(tree.right(), right_prelist, right_inlist))

        return tree

def decode(root, tree, string):
    '''
    function to use a tree to decode a binary string
    Paramiters:
        root: a tree, is ment to be the same as tree on the first call, is used
        to rest the function to the top of the tree once a leaf has been found
        tree: the tree to be used to decode
        string: a string of 1s and 0s
    Return: recursion:
            base: lenght of string is 0, return value of current node
            recursive: progress down the tree looking for nodes as dictaged by
            string
    Pre-condition: root and tree are of the same tree and string only contains 1s
            and 0s
    Post-condition: the correct string has been printed
    '''
    if len(string) == 0:
        if tree.left() == None and tree.right() == None:
            return str(tree.value())
        else:
            return ''
    elif string[0] == '0':
        if tree.left() == None and tree.right() == None:
            return str(tree.value()) + decode(root, root, string)
        elif tree.left() != None:
            return decode(root, tree.left(), string[1:])
        else:
            return decode(root, root, string[1:])
    else:
        if tree.right() == None and tree.left() == None:
            return str(tree.value()) + decode(root, root, string)
        elif tree.right() != None:
            return decode(root, tree.right(), string[1:])
        else:
            return decode(root, root, string[1:])

def post_order(node):
    '''
    function to print out the post-order traversal of a tree: node
    Paramiters: node, a node of class Binary_tree
    Return: recursion:
            base: node == none, return blank string
            recursive: run self on left subtree, right subtree
    Pre-condition: node is of binary_tree type
    Post-condition: a post order traversal has been printed
    '''
    if node == None:
        return ''
    return post_order(node.left()) + post_order(node.right()) + \
    str(node.value()) + ' '

def print_pre_order(node):
    if node == None:
        return
    print_pre_order(node._left)
    if node._left == None and node._right == None:
        print(str(node._value) + 'L')
    else:
        print(node._value)
    print_pre_order(node._right)

def main():
    ''' main '''

    filename = input('Input file: ')
    try:
        file = open(filename)
    except FileNotFoundError:
        print("ERROR: Could not open file " + filename)
        sys.exit(1)

    prelist = file.readline().split()
    inlist = file.readline().split()

    tree = proccess_order(None, prelist, inlist)

    print_pre_order(tree)

    print(post_order(tree).strip())

    print(decode(tree, tree, file.readline().strip()).strip())

main()
