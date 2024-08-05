import time
import Adafruit_ADS1x15

# Create an ADS1115 ADC instance
adc = Adafruit_ADS1x15.ADS1115()

# Choose gain
GAIN = 1  # 1x gain +/- 4.096V

def read_ec_sensor():
    # Read the analog input from channel 0
    value = adc.read_adc(0, gain=GAIN)
    # Convert the raw ADC value to voltage
    voltage = value * (4.096 / 32767.0)
    return voltage

while True:
    ec_voltage = read_ec_sensor()
    print("EC Voltage: {:.2f}V".format(ec_voltage))

    # Add delay
    time.sleep(1)
