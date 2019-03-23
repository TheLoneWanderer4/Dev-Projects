from graphics import graphics

file = open('image.ppm', 'r')
file = file.readlines()
x = file[1].split(' ')
width = x[0]
height = x[1]

pixels = []

for x in range(3, len(file)):
    pixels.append(file[x].strip('\n'))

for x in range(0, len(pixels)):
    pixels[x] = pixels[x].split(' ')

for x in pixels:
    while('' in x):
        x.remove('')

for x in range(0, len(pixels) - 3):
    r = pixels[x]
    g = pixels[x + 1]
    b = pixels[x + 2]
    hold_list = [r, g, b]


gui = graphics(width,height'canvas')



print(pixels)
