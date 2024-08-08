import RPi.GPIO as GPIO
import time

FeederRelayPin = 11   


#default values
duration= 30 #seconds
freq= 28800 #seconds (3 times a day)

'''
if timeUnit == 'days':
	freq = time * 86400
else if timeUnit == 'hours':
	freq = time * 3600
else if timeUnit == 'minutes':
	freq = time * 60
	
duration = servings* 20 
'''



GPIO.setmode(GPIO.BOARD)       # Numbers GPIOs by physical location
GPIO.setup(FeederRelayPin, GPIO.OUT)
GPIO.output(FeederRelayPin, GPIO.HIGH)


def feed(duration = 30,freq = 28800):
	if (time.time() == lastMotorRunTime + freq or lastMotorRunTime == 0):
		#'...relayd on'
		
		#duration=int(input("Input servings of food: "))
		#freq = int(input('Input feeding frequency: '))
		GPIO.output(FeederRelayPin, GPIO.LOW)
		print('feeding')
		time.sleep(duration)
		#'relay off...'
		GPIO.output(FeederRelayPin, GPIO.HIGH)
		print('feeding complete')
		lastMotorRunTime = time.time()
		#time.sleep(freq)



def runFeederNow(timestamp, duration = 30):		
		GPIO.output(FeederRelayPin, GPIO.LOW)
		print('feeding')
		#'relay off...'
		if(time.time() >= timestamp + duration):
			GPIO.output(FeederRelayPin, GPIO.HIGH)
			print('feeding complete')

		
def destroy():
	GPIO.output(FeederRelayPin, GPIO.HIGH)
if __name__ == '__main__':     # Program start from here
	setup()
	try:
		feed(duration,freq)
	except KeyboardInterrupt:  # When 'Ctrl+C' is pressed, the child program destroy() will be  executed.
		destroy()

