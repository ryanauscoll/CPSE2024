#!/usr/bin/python3
import RPi.GPIO as GPIO
import pigpio
import time
#from combinedProgram import push_sensor_data_to_firebase

servo = 26

# more info at http://abyz.me.uk/rpi/pigpio/python.html#set_servo_pulsewidth

pwm = pigpio.pi()
pwm.set_mode(servo, pigpio.OUTPUT)

pwm.set_PWM_frequency( servo, 50 )
def cleanSide(timeStamp,freq = 86400):
	currTime = timeStamp
	if (freq == "Weekly"):
		freq = 86400 * 7
	if (freq == "Monthly"):
		freq = 86400 * 30
	if (time.time() >= currTime + freq):
		cleanSideNow()
		currTime = time.time()

def cleanSideNow(timestamp):
	
	x = 500
	while x < 2500:
		print(f"{round((x-500)/11.1111)} degrees")
		pwm.set_servo_pulsewidth(servo,x) 	
		x += 200
		#push_sensor_data_to_firebase()
		time.sleep(0.5)
	while x > 500:
		print(f"{round((x-500)/11.1111)} degrees")
		pwm.set_servo_pulsewidth(servo,x)
		x -= 200
		#push_sensor_data_to_firebase()
		time.sleep(0.5)	
		# turning off servo
	pwm.set_PWM_dutycycle( servo, 0 )
	pwm.set_PWM_frequency( servo, 0 )
	

