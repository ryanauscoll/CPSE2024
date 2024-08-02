import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import random
import time
from TempSensor import temp
 
# Fetch the service account key JSON file contents
cred = credentials.Certificate('/home/pi/Documents/AquaSmart_Programs/aquasmartsensordata-firebase-adminsdk-m2mu2-d4d6abd1d1.json')
 
# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://aquasmartsensordata-default-rtdb.firebaseio.com"
})
 
ref = db.reference('/sensorData/sensor1')
print(ref.get())
 
def get_sensorData():
    # Simulate sensor data; replace this with actual sensor reading logic
    return {
        'id': 'sensor1',
        'mode': 'medium',
        'name': 'Temperature Sensor',
        'timestamp': int(time.time() * 1000),
        'value': round(temp() * 1.8 + 32, 1),
        'wiperFrequency': 'daily'
    }
 
def push_sensor_data_to_firebase():
    while True:
        sensorData = get_sensorData()
        ref.set(sensorData)  # Overwrites old data in sensor1 node
        print('Data pushed to Firebase:', sensorData)
       # time.sleep(0.01)  # Wait for 1 second
 
if __name__ == "__main__":
    push_sensor_data_to_firebase()
