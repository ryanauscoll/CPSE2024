
import random
import time
from FeederMotor import *
from Squeegee import *
from fbUpdates import *

def loop():
    push_sensor_data_to_firebase()
    feed()
    cleanSide()
if __name__ == "__main__":
    loop()
