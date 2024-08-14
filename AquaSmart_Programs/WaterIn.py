import RPi.GPIO as GPIO
import time

waterChangerPin = 16   


#default values
duration= 10 #seconds
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
GPIO.setup(waterChangerPin, GPIO.OUT)
GPIO.output(waterChangerPin, GPIO.HIGH)

'''
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
		lastMotorRunTime = time.tim n/ e()
		#time.sleep(freq)
'''


def runWaterChangerNow(timestamp, duration = 10):		
		GPIO.output(waterChangerPin, GPIO.LOW)
		print('changing water')
		#'relay off...'
		if(time.time() >= timestamp + duration):
			GPIO.output(waterChangerPin, GPIO.HIGH)
			print('water changing complete')

		
def destroy():
	GPIO.output(waterChangerPin, GPIO.HIGH)
if __name__ == '__main__':     # Program start from here
	try:
		destroy()
	except KeyboardInterrupt:  # When 'Ctrl+C' is pressed, the child program destroy() will be  executed.
		destroy()

