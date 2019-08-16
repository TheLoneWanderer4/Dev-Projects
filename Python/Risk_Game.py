from enum import Enum
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

class Player():
    ### Hold the data of each player
    def __init__(self,x):
        self.name = x
        self.empire = []
        self.armies_to_place = 0
    def conquor(self,x):
        self.empire.append(x)
    def lose(self,x):
        self.empire.remove(x)
    def display(self):
        for x in self.empire:
            print(x.name)
    def determine_armies_to_place(self):
        x = int(len(self.empire) / 3)
        if(x < 3):
            self.armies_to_place = 3
        else:
            self.armies_to_place = x

class Nation():
    ### Hold the data of each country

    def __init__(self,x):
        self.name = x
        self.ruler = ''
        self.armies = 1
        self.borders = []

    def set_ruler(self, x):
        self.ruler = x
    def add_armies(self, x):
        self.armies += x
    def subtract_armies(self, x):
        self.armies -= x
    def set_borders(self, x):
        self.borders = x
    def define(self,ruler,armies,borders):
        self.ruler = ruler
        self.armies = armies
        self.borders = borders
    def attack(self, x):
        attackRoll = attack(self.armies)
        defenseRoll = defense(x.armies)
        if(attackRoll > defenseRoll):
            x.subtract_armies(1)
            print(x.name + ' lost. -1 army' )
            print()
            print(x.name + ' has ' + str(x.armies) + ' remaining.')
        elif(defenseRoll >= attackRoll):
            self.subtract_armies(1)
            print(self.name + ' lost. -1 army' )
            print()
            print(self.name + ' has ' + str(self.armies) + ' remaining.')
        hold = input('')

def int_validation(prompt,invalid,max,min):
    good_input = False
    x = input(prompt)
    while(good_input == False):
        if(x.isnumeric()):
            if(int(x) > max or int(x) < min):
                x = input(invalid)
            else:
                good_input = True
        else:
            x = input(invalid)
    return int(x)

def generate_players(players_count):
    clear()
    players = []
    for x in range(1,players_count + 1):
        players.append(Player(x))
    return players

def name_players(players):
    for x in range(0,len(players)):
        players[x].name = input('Player ' + str(players[x].name) + ' enter your name: ')

def starting_nations(player_count,players,nations):
    nations_per_player = int(len(nations) / player_count)
    for x in players:
        for _ in range(0,nations_per_player):
            num = random.randint(0,(len(nations) - 1))
            x.conquor(nations[num])
            nations.remove(nations[num])
    for x in range(0,len(nations)):
        num = random.randint(0,len(players))
        players[num].conquor(nations[x])
    return players

def turn(player):
    player.determine_armies_to_place()
    while(player.armies_to_place > 0):
        clear()
        count = 1
        print(player.name + ' you control the following nations:')
        for x in player.empire:
            print(str(count) + '. ' + x.name + ': ' + str(x.armies))
            count += 1
        print()
        print('You have ' + str(player.armies_to_place) + ' armies to place')
        print()
        select = int_validation('What nation would you like to add armies to?\n','Please enter a number from the list above.\n',(len(player.empire)),1)
        armies_to_add = int_validation('How many armies would you like to add to ' + player.empire[select - 1].name + '?\n','That is an invalid number of armies\n',player.armies_to_place,0)
        player.empire[select - 1].armies += armies_to_add
        print()
        player.armies_to_place -= armies_to_add
    attack = ''
    while(attack != 'end'):
        attack = input('Who would you like to attack? (Type end if you wish to end your turn)\n')

def main():
    clear()

    alaska = Nation('Alaska')
    northwest_territory = Nation('Northwest Territory')
    alberta = Nation('Alberta')
    ontario = Nation('Ontario')
    greenland = Nation('Greenland')
    quebec = Nation('Quebec')
    western_united_states = Nation('Western United States')
    eastern_united_states = Nation('Eastern United States')
    central_america = Nation('Central America')

    venezuela = Nation('Venezuela')
    peru = Nation('Peru')
    argentina = Nation('Argentina')
    brazil = Nation('Brazil')

    iceland = Nation('Iceland')
    great_britain = Nation('Great Britain')
    scandinavia = Nation('Scandinavia')
    ukraine = Nation('Ukraine')
    northern_europe = Nation('Northern Europe')
    southern_europe = Nation('Southern Europe')
    western_europe = Nation('Western Europe')

    north_africa = Nation('North Africa')
    egypt = Nation('Egypt')
    east_africa = Nation('East Africa')
    congo = Nation('Congo')
    south_africa = Nation('South Africa')
    madagascar = Nation('Madagascar')

    indonesia = Nation('Indonesia')
    new_guinea = Nation('New Guinea')
    western_australia = Nation('Western Australia')
    eastern_australia = Nation('Eastern Australia')

    middle_east = Nation('Middle East')
    india = Nation('India')
    siam = Nation('Siam')
    china = Nation('China')
    afganistan = Nation('Afganistan')
    mongolia = Nation('Mongolia')
    ural = Nation('Ural')
    irkutsk = Nation('Irkutsk')
    siberia = Nation('Siberia')
    yakutsk = Nation('Yakutsk')
    kamchatka = Nation('Kamchatka')
    japan = Nation('Japan')

    nations = [alaska,northwest_territory,alberta,ontario,greenland,quebec,western_united_states,eastern_united_states,central_america,\
    venezuela, peru, argentina, brazil, iceland, great_britain, scandinavia, ukraine, northern_europe, southern_europe, western_europe,\
    north_africa, egypt, east_africa, congo, south_africa, madagascar, indonesia, new_guinea, western_australia, eastern_australia, middle_east,\
    india, siam, china, afganistan, mongolia, ural, irkutsk, siberia, yakutsk, kamchatka, japan]

    player_count = int_validation('How many people are playing?\n','Please input a number between 2 and 7\n',7,2)
    players = generate_players(player_count)
    name_players(players)
    players = starting_nations(player_count,players,nations)
    while(True):
        for x in players:
            turn(x)

main() 
