#!/usr/bin/python3
import RPi.GPIO as GPIO
import pigpio
import time

servo = 25

# more info at http://abyz.me.uk/rpi/pigpio/python.html#set_servo_pulsewidth

pwm = pigpio.pi()
pwm.set_mode(servo, pigpio.OUTPUT)

pwm.set_PWM_frequency( servo, 50 )
def cleanSide(freq = 86400):
	currTime = time.time()
	if (time.time() == currTime + freq):

		x = 500
		while x < 2500:
			print(f"{round((x-500)/11.1111)} degrees")
			pwm.set_servo_pulsewidth(servo,x) 	
			x += 200
			time.sleep(0.5)
		while x > 500:
			print(f"{round((x-500)/11.1111)} degrees")
			pwm.set_servo_pulsewidth(servo,x)
			x -= 200
			time.sleep(0.5)
		currTime = time.time()
			
		# turning off servo
		pwm.set_PWM_dutycycle( servo, 0 )
		pwm.set_PWM_frequency( servo, 0 )

def cleanSideNow():
	x = 500
	while x < 2500:
		print(f"{round((x-500)/11.1111)} degrees")
		pwm.set_servo_pulsewidth(servo,x) 	
		x += 200
		time.sleep(0.5)
	while x > 500:
		print(f"{round((x-500)/11.1111)} degrees")
		pwm.set_servo_pulsewidth(servo,x)
		x -= 200
		time.sleep(0.5)	
		# turning off servo
	pwm.set_PWM_dutycycle( servo, 0 )
	pwm.set_PWM_frequency( servo, 0 )
	