###
### Author: Benjamin Dicken
### Description: This program displays an infographic, based on a text file.
###

import graphics

WIDTH = 650
HEIGHT = 700

def get_cap_non_count(words):
    ''' Gets the count of words that are capitalized and non-capitalized
    words: A list of strings. The words the count. '''
    cap_count = 0
    for word in words:
        if len(word) > 0 and word[0].isupper():
            cap_count += 1
    return cap_count, (len(words) - cap_count)

def get_short_med_long(words):
    ''' Counts the small, medium, and large words in the list of words.
    words: A list of strings. The words the count. '''
    s = 0
    m = 0
    l = 0
    for word in words:
        if len(word) <= 4:
            s += 1
        elif len(word) <= 8:
            m += 1
        else:
            l += 1
    return s, m, l

def get_most_used(counts, min_len, max_len):
    ''' Get the most used word.
    min_len: An int. The min length of the word.
    max_len: An int. The max length of the word. '''
    most = ''
    count = 0
    for k,v in counts.items():
        if v > count and len(k) >= min_len and len(k) <= max_len:
            most = k
            count = v
    return most, count

def draw_bar(gui, labels, values, x, y, w, h):
    ''' Draw a bar chart.
    gui: graphics object.
    labels: A list of strings. The lables for the bar chart.
    values: A list of numbers. The numbers for the bar chart.
    x, y: Integers, the starting x, y coordinates.
    w, h: Integers, The total w, h of the bar chart. '''
    colors = ['DodgerBlue1', 'chartreuse4', 'DodgerBlue1', 'chartreuse4', 'DodgerBlue1']
    y_offset = 0
    for i in range(len(labels)):
        height = int(h / (sum(values)) * (values[i]))
        gui.rectangle(x, y + y_offset, w, height, colors[i])
        gui.text(x + 5, y + y_offset + 5, labels[i], 'white', 12)
        y_offset += height

def read_file(file_name):
    words = {}
    text = open(file_name, 'r')
    for line in text:
        line = line.strip('\n')
        sp = line.split()
        for word in sp:
            if word not in words:
                words[word] = 0
            words[word] += 1
    return words

def main():
    file_name = input('File name:\n')
    read_file(file_name)
    words = read_file(file_name)

    w_most_s, w_count_s = get_most_used(words, 0, 4)
    w_most_m, w_count_m = get_most_used(words, 5, 7)
    w_most_l, w_count_l = get_most_used(words, 8, 10000)
    s, m, l = get_short_med_long(words.keys())
    c, nc = get_cap_non_count(words.keys())

    gui = graphics.graphics(WIDTH, HEIGHT, 'infographic')
    while True:
        gui.clear()
        gui.rectangle(-5, -5, WIDTH+10, HEIGHT+10, 'gray27')
        gui.text(50, 30, file_name, 'cyan', 30)
        gui.text(50, 80, 'Total Unique Words: ' + str(len(list(words.keys()))), 'white', 25)
        label = w_most_s + ' (' + str(w_count_s) + 'x) ' + \
                w_most_m + ' (' + str(w_count_m) +  'x) ' + \
                w_most_l + ' (' + str(w_count_l) + 'x)'
        gui.text(50, 125, 'Most used words (s/m/l): ', 'white', 17)
        gui.text(250, 125, label, 'cyan', 17)
        gui.text(125, 160, 'Word lengths', 'white', 25)
        draw_bar(gui, ['small words', 'medium words', 'large words'], [s, m, l], 125, 200, 150, 450)
        gui.text(375, 160, 'Cap/Non-Cap', 'white', 25)
        draw_bar(gui, ['Capitalized', 'Non Capitalized'], [c, nc], 375, 200, 150, 450)
        gui.update_frame(30)

main()
