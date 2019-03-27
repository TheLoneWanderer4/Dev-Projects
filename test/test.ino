#include <Adafruit_DotStar.h>
#include <Wire.h>

#define NUMPIXELS 2 // Number of LEDs in strip
     
Adafruit_DotStar strip = Adafruit_DotStar(NUMPIXELS, DOTSTAR_BRG);

void setup(){
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
}

void loop(){
    strip.setPixelColor(1, 255, 0, 0);
    strip.show();
}
