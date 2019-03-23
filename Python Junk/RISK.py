import random
from os import system, name
from time import sleep

def clear():
    if name == 'nt':
        _ = system('cls')
def attackDice(x):
    if(x > 3):
        return 3
    elif(x == 3):
        return 2
    elif(x == 2):
        return 1
    else:
        return 0
def defDice(x):
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
    armiesAttack = int(input('Attacking force enter your armies: '))
    print()
    armiesDefend = int(input('Defending force enter your armies: '))
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
            exit(0)
        sleep(0.001)
        clear()

    print('Attack forces remaining: ' + str(armiesAttack))
    print('Defense forces remaining: ' + str(armiesDefend))
    print()
    if(armiesAttack == 0):
        print('Defense force wins with ' + str(armiesDefend) +' armies remaining.')
    elif(armiesDefend == 0):
        print('Attack force wins with ' + str(armiesAttack) +' armies remaining.')
    else:
        print('error')

    print()
    closeProgram = input('Type exit to close, otherwise press enter: ')
