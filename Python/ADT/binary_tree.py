
# Implements a binary tree
class BinaryTree:
    def __init__(self, value):
        self._value = value
        self._left = None
        self._right = None

    def insert_right(self, value):
        if self._right == None:
            self._right = BinaryTree(value)
        else:
            t = BinaryTree(value)
            t._right = self._right
            self._right = t

    def insert_left(self, value):
        if self._left == None:
            self._left = BinaryTree(value)
        else:
            t = BinaryTree(value)
            t._left = self._left
            self._left = t

    def set_root(self,value):
        self._value = value

    def get_value(self):
        return self._value

    def get_left(self):
        return self._left

    def get_right(self):
        return self._right

    def __str__(self):
        if self == None:
            return 'None'
        else:
            return "({} {} {})".format(str(self._value), str(self._left), str(self._right))
