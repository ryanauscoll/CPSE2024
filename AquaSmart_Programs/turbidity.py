# import smbus
# import time


# bus = smbus.SMBus(1)


# address = 0x48


# def read_analog(channel):
#     if channel < 0 or channel > 3:
#         return -1
#     bus.write_byte(address, channel)
#     value = bus.read_byte(address)
#     return value

# while True:
#     turbidity_value = read_analog(0)
#     print(f"Turbidity Analog Value: {turbidity_value}")
#     time.sleep(1)


import smbus
import time

# Initialize I2C bus
bus = smbus.SMBus(1)

# PCF8591 address
pcf8591_address = 0x48  # Ensure this is the correct address

def read_pcf8591_analog(channel):
    if channel < 0 or channel > 3:
        return -1
    bus.write_byte(pcf8591_address, channel)
    value = bus.read_byte(pcf8591_address)
    return value

while True:
    # Read value from AIN3
    value = read_pcf8591_analog(3)  # Change channel to 3
    print(f"Analog Value from AIN3: {value}")
    time.sleep(1)
