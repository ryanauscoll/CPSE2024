import time
import Adafruit_ADS1x15


adc = Adafruit_ADS1x15.ADS1115(busnum=1) 
#must use busnum=1


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

#prints out output values
while True:
    ec_conductivity = read_ec_sensor()
    print("EC Conductivity: {:.2f} µS/cm".format(ec_conductivity))

    #delay
    time.sleep(1)
