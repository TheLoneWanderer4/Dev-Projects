from graphics import graphics

def load_settings():
    file = open('data.txt', 'r')
    file = file.readlines()
    options = {}
    for x in range(0, len(file)):
        options[x] = file[x]

    return options

def write_settings(options):
    file = open('data.txt', 'w')
    for x in options:
        file.write(str(options[x]) + '\n')

class player:
    def __init__(self,x):
        self.x = x
        self.height = 100
        self.y = 40

    def draw(self, gui):
        gui.rectangle(self.x, self.y, 15, self.height, 'black')

    def move(self):
        self.y += 1

class Ball:
    def __init__(self,width,height):
        self.x = width / 2
        self.y = height /2

    def draw(self, gui):
        gui.ellipse(self.x,self.y,10,10,'black')

    def move(self, x, y):
        self.x = x
        self.y = y


def main():
    options = load_settings()
    command = input('Change settings? \n')
    if(command == 'yes'):
        options[0] = int(input('Width: '))
        options[1] = int(input('Height: '))
        options[2] = int(input('FrameRate: '))
        options[3] = input('Color: ')
        options[4] = int(input('Speed: '))
        options[5] = int(input('Size: '))
        write_settings(options)

    width = int(options[0])
    height = int(options[1])
    frame_rate = int(options[2])
    color = options[3]
    speed = int(options[4])
    size = int(options[5])

    player_one = player(0)
    player_two = player(width - 15)

    ball = Ball(width, height)

    gui = graphics(width, height, 'TEST')

    x = width/2
    y = height/2
    player_one_y = 100
    player_one_height = 150
    speed_x = speed
    speed_y = speed
    angle = 1.2
    while(True):
        gui.clear()
        if(x <= 15 and y >= player_one_y and y <= player_one_y + player_one_y):
            speed_x = speed_x * -1
        if(x >= height or x <= 0):
            speed_x = speed_x * -1
        if(y >= height or y <= 0):
            speed_y = speed_y * -1
        x += speed_x
        y += speed_y / angle

        ball.move(x,y)
        ball.draw(gui)
        player_one.draw(gui)
        player_two.draw(gui)




        gui.update_frame(frame_rate)


main()
