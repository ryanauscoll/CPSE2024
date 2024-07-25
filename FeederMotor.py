import RPi.GPIO as GPIO
import time

RelayPin = 11   

def setup():
	GPIO.setmode(GPIO.BOARD)       # Numbers GPIOs by physical location
	GPIO.setup(RelayPin, GPIO.OUT)
	GPIO.output(RelayPin, GPIO.HIGH)

def loop():
	while True:
		#'...relayd on'
		
		duration=int(input("Input amount of food: "))
		freq = int(input('Input feeding frequency: '))
		GPIO.output(RelayPin, GPIO.LOW)
		print('feeding')
		time.sleep(duration)
		#'relay off...'
		GPIO.output(RelayPin, GPIO.HIGH)
		print('feeding complete')
		time.sleep(freq)

def destroy():
	GPIO.output(RelayPin, GPIO.HIGH)
if __name__ == '__main__':     # Program start from here
	setup()
	try:
		loop()
	except KeyboardInterrupt:  # When 'Ctrl+C' is pressed, the child program destroy() will be  executed.
		destroy()

