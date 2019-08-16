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

class Queue:
    def __init__(self):
        self._base = None
    def enqueue(self, item):
        if self._base == None:
            self._base = item
        else:
            n = self._base
            while n._next != None:
                n = n._next
            n._next = item
    def dequeue(self):
        if self._base == None:
            return None
        else:
            n = self._base
            while n != None:
                n = n._next
            ret = n
            n = None
            return ret
    def __str__(self):
        ret = ''
        n = self._base
        while n!=None:
            ret += str(n) + ' : '
            n = n._next
        return ret.strip(' : ')
