import Adafruit_ADS1x15

# Create an ADS1115 ADC instance.
adc = Adafruit_ADS1x15.ADS1115()

# Define the ADC gain
GAIN = 1

# Function to read the TDS sensor value
def read_tds_sensor():
    return adc.read_adc(0, gain=GAIN)  # Reading from channel 0

# Read and print the TDS sensor value
tds_value = read_tds_sensor()
print("TDS Sensor Value:", tds_value)
