'''
import Adafruit_ADS1x15
import time

# Create an ADS1115 ADC instance.
adc = Adafruit_ADS1x15.ADS1115(busnum=1)

# Define the ADC gain
GAIN = 1

# Function to read the TDS sensor value
def read_tds_sensor():
    return adc.read_adc(2, gain=GAIN)  # Reading from channel 0

# Read and print the TDS sensor value
    
while True:
    tds_value = read_tds_sensor()
    print("TDS Sensor Value:", tds_value)
    time.sleep(0.5)
'''
import Adafruit_ADS1x15
import time

# Create an ADS1115 ADC instance.
adc = Adafruit_ADS1x15.ADS1115(busnum=1)

# Define the ADC gain
GAIN = 1

# Define the voltage reference and ADC resolution
VREF = 4.096  # Reference voltage of ADS1115
ADC_MAX = 32767  # Maximum ADC value for 16-bit resolution

# Define your sensor's conversion factors
# These should be obtained from your sensor's datasheet
# For example purposes, we use an arbitrary conversion factor
# You need to adjust this based on your sensor's specifications
V_to_TDS_conversion_factor = 975  # Example factor (adjust as needed)

# Function to read the TDS sensor value
def read_tds_sensor():
    raw_value = adc.read_adc(2, gain=GAIN)  # Reading from channel 2
    # Convert raw ADC value to voltage
    voltage = (raw_value / ADC_MAX) * VREF
    # Convert voltage to TDS using your sensor's conversion factor
    tds_value = voltage * V_to_TDS_conversion_factor
    return tds_value

# Read and print the TDS sensor value
while True:
    tds_value = read_tds_sensor()
    print("TDS Sensor Value (ppm):", tds_value)
    time.sleep(1)
