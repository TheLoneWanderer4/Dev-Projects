import random

class Node:
    def __init__(self, value):
        self._value = value
        self._next = None

    def __eq__(self, other):
        try:
            return self._value == other._value
        except:
            return False

    def __str__(self):
        return str(self._value)


class Stack:
    def __init__(self):
        self._top = None
    def push(self, item):
        if(self._top == None):
            self._top = item
        else:
            item._next = self._top
            self._top = item
    def pop(self):
        ret = self._top
        self._top = self._top._next
        return ret
    def height(self):
        ret = 0
        n = self._top
        while n!=None:
            ret += 1
            n = n._next
        return ret
    def __str__(self):
        ret = ''
        n = self._top
        while n!=None:
            ret += str(n) + ' : '
            n = n._next
        return ret.strip(' : ')
