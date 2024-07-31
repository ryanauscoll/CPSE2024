import time
from w1thermsensor import W1ThermSensor

sensor = W1ThermSensor()

def temp():
	temperature = sensor.get_temperature()
	#print(f"the temp is {temperature} degrees celsius")
	return temperature
