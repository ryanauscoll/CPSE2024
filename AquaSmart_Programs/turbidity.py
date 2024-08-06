import time
import Adafruit_ADS1x15

adc = Adafruit_ADS1x15.ADS1115(busnum=1)

def read_turbidity_sensor():
    # Read the analog input from channel 0
    value = adc.read_adc(0, gain=1)
    # Convert the raw ADC value to voltage
    voltage = value * (4.096 / 32767.0)
    # You may need to calibrate or process the voltage value based on your turbidity sensor's characteristics
    turbidity = voltage  # Adjust this based on your calibration
    return turbidity
#
#while True:
 #   turbidity = read_turbidity_sensor()
  #  print("Turbidity Reading: {:.2f}".format(turbidity))

    # Delay
   # time.sleep(1)
