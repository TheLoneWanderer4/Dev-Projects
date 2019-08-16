class Hashtable:
    def __init__(self, size):
        ''' init '''
        self._pairs = [None] * size
        self._size = size
        self._index = -1

    def put_h(self, hashvalue, key, value):
        ''' helper method for the recursive method put,
        passing through the hashvalue '''
        if hashvalue < 0:
            hashvalue = self._size -1
        if self._pairs[hashvalue] == None:
            self._pairs[hashvalue] = [key, value]
        elif self._pairs[hashvalue][0] == key:
            self._pairs[hashvalue][1] = value
        else:
            self.put_h(hashvalue - 1, key, value)

    def put(self, key, value):
        '''
        recursive method to accociate a key and value pair within the object
        Parameters: key, a hashable value : value, anything
        Return: reccusion:
                base case: populate spot in internal list
                reccusion: deciment hashvalue and recurse
        Pre-condition: It's assumed that the first value passed into value is
                a list of some form. This assumption is the reason that the second
                base case will append the new value rather than overwitting
        Post-condition: value is inside the hashable object
        '''
        hashvalue = self.hash(key)
        if self._pairs[hashvalue] == None:
            self._pairs[hashvalue] = [key, value]
        elif self._pairs[hashvalue][0] == key:
            self._pairs[hashvalue][1] = value
        else:
            self.put_h(hashvalue - 1, key, value)

    def get_h(self, hashvalue, key):
        ''' helper method for the recursive method get,
        passing through the hashvalue '''
        if hashvalue < 0:
            hashvalue = self._size - 1
        if self._pairs[hashvalue] == None:
            return None
        elif self._pairs[hashvalue][0] == key:
            return self._pairs[hashvalue][1]
        else:
            return self.get_h(hashvalue-1, key)

    def get(self, key):
        '''
        reccusive method to return the "value" accociated with a given key
        Parameters: key, a hashable value
        Return: recursion:
                base: return value accociated with key
                reccusive: decrement hashvalue until key, or nothing, is found
        Pre-condition: key is hashable
        Post-condition: None, or a value has been reutrned
        '''
        hashvalue = self.hash(key)
        if self._pairs[hashvalue] == None:
            return None
        elif self._pairs[hashvalue][0] == key:
            return self._pairs[hashvalue][1]
        else:
            return self.get_h(hashvalue-1, key)

    def hash(self, key):
        '''
        method to get the hash value of a given key
        Parameters: key, str
        Return: int value
        Pre-condition: key is a str
        Post-condition: int has been returned
        '''
        p = 0
        for c in key:
            p = 31*p + ord(c)
        return (p % self._size)

    def contains_h(self, hashvalue, key):
        ''' helper method for the recursive method contains,
        passing through the hashvalue '''
        if hashvalue < 0:
            hashvalue = self._size - 1
        if self._pairs[hashvalue] == None:
            return False
        elif self._pairs[hashvalue][0] == key:
            return True
        else:
            return self.contains_h(hashvalue-1, key)

    def __contains__(self, key):
        '''
        special method used to determine if a key is in the Hashtable object
        Parameters: key, anything that can be used as a key
        Return: recursion:
                base case: return T/F
                reccusive case: deciment hashvalue and call helper
        Pre-condition: key is a valid type
        Post-condition: T/F has been returned
        '''
        hashvalue = self.hash(key)
        if self._pairs[hashvalue] == None:
            return False
        elif self._pairs[hashvalue][0] == key:
            return True
        else:
            return self.contains_h(hashvalue-1, key)

    def __iter__(self):
        return self

    def __next__(self):
        if self._index == len(self._pairs) -1:
            self._index = -1
            raise StopIteration
        self._index += 1
        if self._pairs[self._index] != None:
            return self._pairs[self._index]
        return self.__next__()

    def __str__(self):
        ''' str '''
        return str(self._pairs)
