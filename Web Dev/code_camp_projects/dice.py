import random
import os
clear = lambda: os.system('cls')

def D100(x):
    ret = 0
    for x in range(0,x):
        ret += random.randint(0,9) * 10
        ret += random.randint(0, 10)
    return ret

def D20(x):
    ret = 0
    for x in range(0,x):
        ret += random.randint(0,20)
    return ret

def D12(x):
    ret = 0
    for x in range(0,x):
        ret += random.randint(0,12)
    return ret

def D10(x):
    ret = 0
    for x in range(0,x):
        ret += random.randint(0,10)
    return ret

def D8(x):
    ret = 0
    for x in range(0,x):
        ret += random.randint(0,8)
    return ret

def D6(x):
    ret = 0
    for x in range(0,x):
        ret += random.randint(0,6)
    return ret

def D4(x):
    ret = 0
    for x in range(0,x):
        ret += random.randint(0,4)
    return ret

def main():
    while(True):
        input_value = input('Dice: ')
        input_value = input_value.split(' ')
        times = int(input_value[1])
        input_value = int(input_value[0])
        dice = {100: D100(times), 20: D20(times), 12: D12(times), 10: D10(times), 8: D8(times), 6: D6(times), 4: D4(times)}
        print()
        print('Your roll: '+ str(dice[input_value]))
        print()

main()
