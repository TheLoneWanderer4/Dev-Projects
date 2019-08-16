'''
Authour: Amin Sennour
Description: Simple pong clone
'''

import sys, pygame

pygame.init()
size = width, height = 1700, 900
screen = pygame.display.set_mode(size)

def back_ground():
    '''
    Simple function for use drawing lines in the background of the game
    '''

    for x in range(0, width // 100):
        pygame.draw.line(screen, (255,255,255), [x * 100, 0], [x * 100, height], 1)
    for x in range(0, height // 100):
        pygame.draw.line(screen, (255,255,255), [0, x * 100], [width, x * 100], 1)

class BALL():
    def __init__(self):
        self.x = width // 2
        self.y = height // 2
        self.speed = 15
        self.y_speed = 15
        self.radius = 20

    def reset(self):
        '''
        function which resets the balls possition as the center of the screen
        '''
        self.x = width // 2
        self.y = height // 2
        self.speed = self.speed * -1
        if(self.speed > 0):
            self.speed = 15
        else:
            self.speed = -15

        if(self.y_speed > 0):
            self.y_speed = 15
        else:
            self.y_speed = -15

    def move(self, player_one, player_two):
        '''
        function which institutues the movment of ball, including it's bouncing off the paddles / upper walls

        player_one / player_two = the player objects, used simply to calculate the paddles hits with the player.hit() function
        '''

        # Draws a black ball before doing any mvoment calcs. First part of simulating movment
        pygame.draw.circle(screen, (0, 0, 0), (self.x,self.y), self.radius)


        # This block of code checks to see if the paddles have been it, or if the ball has gone off screen
        # If a paddle is hit the direction of the ball is flipped with the speed * -1
        # Otherwise the ball is returned to the center of the screen
        if(self.x >= width - player_two.width):
            if(player_two.hit(self.y, self.radius)):
                self.speed = int(self.speed * 1.2) * -1
                self.y_speed = int(self.y_speed * 1.15)
            else:
                self.reset()

        if(self.x <= player_one.width):
            if(player_one.hit(self.y, self.radius)):
                self.speed = int(self.speed * 1.2) * -1
                self.y_speed = int(self.y_speed * 1.15)
            else:
                self.reset()

        # Bounces the ball of the top and bottom of the screen using the same method as above
        if((self.y + self.radius) >= height or (self.y - self.radius) <= 0):
            self.y_speed = self.y_speed * -1

        # Moves the ball
        self.x += self.speed
        self.y += (self.y_speed // 2)

        # Draws the ball that will be seen, currently green. Second part of simulating movment
        pygame.draw.circle(screen, (0, 255, 0), (self.x,self.y), self.radius)

class PLAYER():
    def __init__(self, x):
        self.x = x
        self.y = height // 2
        self. speed = 15
        self.width = 20
        self.height = 200

    def move(self, up, down):
        '''
        function to move the player objects
        up / down: pygame keys assigned to the movment keys for the player
        '''
        # Draw black rectangle. First part of simulating movment
        pygame.draw.rect(screen, (0, 0, 0), [self.x, self.y, self.width, self.height],1)

        if(self.y + self.height <= height and self.y >= 0):
            if(up): self.y -= self.speed
            if(down): self.y += self.speed
        elif(self.y + self.height > height):
            self.y = height - self.height
        elif(self.y < 0):
            self.y = 0

        # Draw coloured rectangle. Second part of simulating movment
        pygame.draw.rect(screen, (255, 255, 255), [self.x, self.y, self.width, self.height],1)

    def hit(self, ball_y, radius):
        if(ball_y >= self.y and ball_y <= self.y + self.height):
            return True

def main():
    # Titles the game window
    pygame.display.set_caption('Pong')

    # Bool on which to base the game loop
    run = True

    # Generates objects
    ball = BALL()
    player_one = PLAYER(0)
    player_two = PLAYER(width - 20)

    # Game loop
    while run:

        # Simulates framerate
        pygame.time.delay(25)

        # Closes program if x button is clicked
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False

        # Draws the lines on the background
        back_ground()

        # Generates a list of pressed keys
        keys =  pygame.key.get_pressed()

        # Executes gameplay
        ball.move(player_one, player_two)
        player_one.move(keys[pygame.K_w], keys[pygame.K_s])
        player_two.move(keys[pygame.K_UP], keys[pygame.K_DOWN])

        # Updates screen
        pygame.display.update()

    # Closes screen
    pygame.quit()

main()
