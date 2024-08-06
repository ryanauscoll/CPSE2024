import time
import board
import busio
from adafruit_ads1x15 import ADS1115

# Create I2C bus object
i2c = busio.I2C(board.SCL, board.SDA)

# Create ADS1115 ADC object
ads = ADS1115.ADS1115(i2c)

# Set the gain (you may need to adjust this depending on your sensor and range)
GAIN = 1

def read_sensor():
    # Read the ADC value from channel 0
    adc_value = ads.read_adc(0, gain=GAIN)
    return adc_value

while True:
    turbidity = read_sensor()
    print(f"Turbidity Sensor Reading: {turbidity}")
    time.sleep(1)
