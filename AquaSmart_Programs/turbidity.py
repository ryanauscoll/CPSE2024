import smbus
import time


bus = smbus.SMBus(1)


address = 0x48


def read_analog(channel):
    if channel < 0 or channel > 3:
        return -1
    bus.write_byte(address, channel)
    value = bus.read_byte(address)
    return value

while True:
    turbidity_value = read_analog(0)
    print(f"Turbidity Analog Value: {turbidity_value}")
    time.sleep(1)
