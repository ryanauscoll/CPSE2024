import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
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
    print("got sensor data")
    return {
        'id': 'sensor1',
        'mode': 'medium',
        'name': 'Temperature Sensor',
        'timestamp': int(time.time() * 1000),
        'value': round(temp() * 1.8 + 32, 2),
        'wiperFrequency': 'daily'
    }
 

def push_data_to_firebase():
    while True:
        sensor_data = get_sensorData()
        ref.set(sensor_data)  # Overwrites old data
        print('Data pushed to Firebase:', sensor_data)
        time.sleep(1)  # Wait for 1 second

if __name__ == "__main__":
    push_data_to_firebase()
