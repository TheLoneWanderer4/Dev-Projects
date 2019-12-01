###
### Author: Amin Sennour
### Description: This program can produce text-based stock plots.
###
###   Some inut strings:
###     u0u3u2u2u1u1u0u0d1d1d2d2d3d3d2d2d1d1d0d0u1u1u2u2u3u3u2u2u1u1u0u0d1d1d2d2d3
###     u1u1u1u1u1u1u1d1d1d1d1d1d1d1d1d1d1d1d1d1d1u1u1u1u1u1u1u1u1u1d1d1d1d1u1u1u1
###

type = ''
while type != 'horizontal' and type != 'double' and type != 'vertical':
    type = input('Enter mode (horizontal or vertical):\n')

seqOne = ' '
while len(seqOne) % 2 != 0:
    seqOne = input('Enter a stock input string:\n')

#this is a very fun comment




# this is another very fun comment

if type == 'horizontal':
    print('#' * (int(len(seqOne) / 2) + 4))
    i = 16
    while i >= 0:
        print('# ', end='')
        level = 2 + 2 + 2 + 2
        j = 0
        while j < len(seqOne):
            amount  = int(seqOne[j+1])
            if seqOne[j] != 'u':
                amount = -amount
            level += amount

            if i == level:
                print('*', end='')
            else:
                print(' ', end='')

            j = j + 1 + 1
        print(' #')
        i -= 1
    print('#' * (int(len(seqOne) / 2) + 4))

if type == 'vertical':
    level = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
    i = 0
    print('#' * 19)
    while i < len(seqOne):
        amount  = int(seqOne[i+1])
        if seqOne[i] != 'u':
            amount = -amount
        level = level + amount

        befSpa = ' ' * level
        aftSpa = ' ' * (16 - level)
        print('#' + befSpa + '*' + aftSpa + '#')
        i += 2
    print('#' * 19)
