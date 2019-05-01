""""
File: linked_list.py
Author: Amin Sennour
Purpose: File to contain the linked list class, and support elements, to be
         imported and used elsewhere
Course: CSC 120 Spring
ll
"""

class Node:
    def __init__(self, name):
        ''' init '''
        self._name = name
        self._freinds = LinkedList()
        self._next = None

    def add_freind(self, freind):
        '''
        simple method to add a freind to the self._freinds linked list
        Paramiters: freind, a node
        Return: none
        Pre_condition: self._freinds is a linked list
        Post_condition: freind has been added to the front of self._freinds
        '''
        self._freinds.add(freind)

    def __eq__(self, other):
        ''' eq '''
        if(other == None):
            return False
        else:
            return self._name == other._name

    def __str__(self):
        ''' str '''
        return str(self._name)

class LinkedList:
    def __init__(self):
        ''' init '''
        self._head = None

    def add(self,new):
        new = Node(new)
        '''
        simple method to add a new node, new, to the front of self
        Paramiters: new, a node
        Return: none
        Pre_condition: new is of the Node class
        Post_condition: new is now the first node in self
        '''
        new._next = self._head
        self._head = new

    def append(self, new):
        new = Node(new)
        '''
        method to add a new node, new, to the end of a linked list
        Paramiters: New, a node
        Return: None
        Pre-condition: New is a node
        Post-condition: New is at the end of self
        '''
        curr = self._head
        if curr == None:
            self._head = new
            return
        while curr._next != None:
            curr = curr._next
        curr._next = new

    def contains(self, name):
        '''
        simple method determine if self contains a node of name, name
        Paramiters: name, a str
        Return: T/F
        Pre_condition: None
        Post_condition: T/F has been returned
        '''
        n = self._head
        while n != None:
            if(n._name == name):
                return True
            else:
                n = n._next
        return False

    def get_name(self, name):
        '''
        simple method to get return the node of name, name
        Paramiters: name, a str
        Return: None/n, a node
        Pre_condition: None
        Post_condition:  None/n, a node has been returned
        '''
        n = self._head
        while n != None:
            if(n._name == name):
                return n
            else:
                n = n._next
        return None

    def common_freinds(self, other):
        '''
        a complicated method to generate and return a python list containg all
        shared freinds of self and other, where self is understood to be a list
        of freinds
        Paramiters: other, a node
        Return: ret, a list
        Pre_condition: other is a node and self is a linked list of names
        Post_condition: ret has been returned
        '''
        # return variable
        ret = LinkedList()
        # get the linked list of freinds from the node
        other = other._freinds
        # generate top level curr variable
        self_curr = self._head
        # iterate through self
        while self_curr != None:
            # generate second level curr variable
            other_curr = other._head
            # iterate through other
            while other_curr != None:
                # look for matches and if found appened to ret
                if self_curr == other_curr:
                    ret.append(Node(self_curr._name))
                # advance nested loops
                other_curr = other_curr._next
            self_curr = self_curr._next

        # return
        return ret

    def __str__(self):
        ''' str '''
        n = self._head
        ret = ''
        while n!= None:
            ret += str(n) + '\n'
            n = n._next
        return ret.strip()
