#include <Wire.h>

void setup() {
  Wire.begin();
}

void loop() {
  Wire.write('Hello world');
}
