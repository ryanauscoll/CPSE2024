import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import random
import time
from TempSensor import temp
# Fetch the service account key JSON file contents
cred = credentials.Certificate('/home/aquasmart/Documents/AquaSmart_Programs/aquasmartsensordata-firebase-adminsdk-m2mu2-d4d6abd1d1.json')
# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://aquasmartsensordata-default-rtdb.firebaseio.com"
})

ref = db.reference('/sensor_data')
print(ref.get())
def get_sensor_data():
    # Simulate sensor data; replace this with actual sensor reading logic
    return {
        'temperature': round(temp()*1.8 + 32,1),
        'humidity': round(random.uniform(40.0, 60.0), 2)
    }

def push_sensor_data_to_firebase():
    while True:
        sensor_data = get_sensor_data()
        ref.set(sensor_data)  # Overwrites old data
        print('Data pushed to Firebase:', sensor_data)
        time.sleep(1)  # Wait for 1 second

if __name__ == "__main__":
    push_sensor_data_to_firebase()
    
