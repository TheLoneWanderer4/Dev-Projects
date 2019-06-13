import random
from os import system, name
from time import sleep
import sys

def clear():
    system('clear')
def attackDice(x):
    random.seed(random.random())
    if(x > 3):
        return 3
    elif(x == 3):
        return 2
    elif(x == 2):
        return 1
    else:
        return 0
def defDice(x):
    random.seed(str(random.random()))
    if(x >= 2):
        return 2
    elif(x > 0):
        return 1
    else:
        return 0
def diceRoll(y):
    return random.randint(1,y)
def combat(x):
    ret = 0
    hold = 0
    for i in range(0,x):
        hold = diceRoll(6)
        if(hold > ret):
            ret = hold
    return ret
def attack(x):
    dice = attackDice(x)
    return combat(dice)
def defense(x):
    dice = defDice(x)
    return combat(dice)

closeProgram = ''

while(closeProgram != 'exit'):
    clear()
    armiesAttack = input('Attacking force enter your armies: ')
    try:
        armiesAttack = int(armiesAttack)
    except:
        print('Oops, please enter a number for the attacking armies next time')
        sys.exit(1)
    print()
    armiesDefend = input('Defending force enter your armies: ')
    try:
        armiesDefend = int(armiesDefend)
    except:
        print('Oops, please enter a number for the defending armies next time')
        sys.exit(1)

    print()
    exit = input('Press enter to commense the attack: ')
    clear()

    while(armiesAttack > 0 and armiesDefend > 0):
        attackRoll = attack(armiesAttack)
        defendRoll = defense(armiesDefend)

        print('------------------------------------------')
        print('-----------LET THE GAMES BEGIN------------')
        print('------------------------------------------')
        print('Attack rolled: ' + str(attackRoll))
        print('Defnese rolled: ' + str(defendRoll))
        print()

        if(defendRoll >= attackRoll):
                armiesAttack -= 1
            print('Attack lost, -1 army')
            print()
            print('Attack forces remaining: ' + str(armiesAttack))
            print('Defense forces remaining: ' + str(armiesDefend))
        else:
            armiesDefend -= 1
            print('Defnese lost, -1 army')
            print()
            print('Attack forces remaining: ' + str(armiesAttack))
            print('Defense forces remaining: ' + str(armiesDefend))

        print()
        if(exit != 'test'):
            exit = input('Type exit to surrender, otherwise press enter: ')
        if(exit == 'exit'):
            sys.exit(1)
        sleep(0.001)
        clear()

    if(armiesAttack == 0):
        print('Defense force wins with ' + str(armiesDefend) +' armies remaining.')
        print()
        print('Attack force loses with ' + str(armiesAttack) +' armies remaining.')
    elif(armiesDefend == 0):
        print('Attack force wins with ' + str(armiesAttack) +' armies remaining.')
        print()
        print('Defense force loses with ' + str(armiesDefend) +' armies remaining.')
    else:
        print('error')

    print()
    closeProgram = input('Type exit to close, otherwise press enter: ')
