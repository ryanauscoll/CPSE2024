# import time
# import Adafruit_ADS1x15

# # Create an ADS1115 ADC instance
# adc = Adafruit_ADS1x15.ADS1115(busnum=1)

# # Choose gain
# GAIN = 1  # 1x gain +/- 4.096V

# def read_ec_sensor():
#     # Read the analog input from channel 0
#     value = adc.read_adc(0, gain=GAIN)
#     # Convert the raw ADC value to voltage
#     voltage = value * (4.096 / 32767.0)
#     return voltage

# while True:
#     ec_voltage = read_ec_sensor()
#     print("EC Voltage: {:.2f}V".format(ec_voltage))

#     # Add delay
#     time.sleep(1)
import time
import Adafruit_ADS1x15

# Create an ADS1115 ADC instance
adc = Adafruit_ADS1x15.ADS1115(busnum=1)

# Calibration constants
CALIBRATION_M = 7255.06
CALIBRATION_B = -183.11

def read_ec_sensor():
    # Read the analog input from channel 0
    value = adc.read_adc(0, gain=1)
    # Convert the raw ADC value to voltage
    voltage = value * (4.096 / 32767.0)
    # Apply calibration
    conductivity = CALIBRATION_M * voltage + CALIBRATION_B
    return conductivity

while True:
    ec_conductivity = read_ec_sensor()
    print("EC Conductivity: {:.2f} µS/cm".format(ec_conductivity))

    # Add delay to avoid flooding the terminal
    time.sleep(1)
