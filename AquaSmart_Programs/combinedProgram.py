import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import time
from TempSensor import temp
from salinityConversion import realSalinity
from EC import read_ec_sensor
from FeederMotor import *
from Squeegee import *
from turbidity import *
from TDSTest import *
# Fetch the service account key JSON file contents
cred = credentials.Certificate('/home/pi/Documents/AquaSmart_Programs/aquasmartsensordata-firebase-adminsdk-m2mu2-d4d6abd1d1.json')
 
# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://aquasmartsensordata-default-rtdb.firebaseio.com"
})
 
tempRef = db.reference('/sensorData/sensor1')
ecRef = db.reference('/sensorData/sensor2')
salRef = db.reference('/sensorData/sensor3')
turbRef = db.reference('/sensorData/sensor4')
TDSRef = db.reference('/sensorData/sensor5')
#print(ref.get())
 
def get_tempData():
    # Simulate sensor data; replace this with actual sensor reading logic
    #print("got sensor data")
    return {
        'id': 'sensor1',
        'mode': 'medium',
        'name': 'Temperature Sensor',
        'timestamp': int(time.time() * 1000),
        'value': round(temp() * 1.8 + 32, 2)
    }

def get_salinityData():
    # Simulate sensor data; replace this with actual sensor reading logic
    #print("got sensor data")
    return {
        'id': 'sensor3',
        'mode': 'medium',
        'name': 'Salinity Sensor',
        'timestamp': int(time.time() * 1000),
        'value': (realSalinity())
    }

def get_ECData():
    # Simulate sensor data; replace this with actual sensor reading logic
    #print("got sensor data")
    return {
        'id': 'sensor2',
        'mode': 'medium',
        'name': 'Electrical Conductivity Sensor',
        'timestamp': int(time.time() * 1000),
        'value': round(read_ec_sensor(),2)
    }
 
 
def get_TurbData():
    # Simulate sensor data; replace this with actual sensor reading logic
    #print("got sensor data")
    return {
        'id': 'sensor4',
        'mode': 'medium',
        'name': 'Turbidity Sensor',
        'timestamp': int(time.time() * 1000),
        'value': round(read_turbidity_sensor(),2)
    } 
    
def get_TDSData():
    # Simulate sensor data; replace this with actual sensor reading logic
    #print("got sensor data")
    print(read_tds_sensor())
    return {
        'id': 'sensor4',
        'mode': 'medium',
        'name': 'Total Dissolved Solids Sensor',
        'timestamp': int(time.time() * 1000),
        'value': round(read_tds_sensor(),2)
    } 
def push_sensor_data_to_firebase():
    tempData  = get_tempData()
    salinityData  =   get_salinityData()
    turbData = get_TurbData()
    ECData = get_ECData()
    TDSData = get_TDSData()
    tempRef.set(tempData)  
    salRef.set(salinityData)
    ecRef.set(ECData)  
    turbRef.set(turbData)
    TDSRef.set(TDSData)
    #print('Data pushed to Firebase:', sensorData)
       # time.sleep(0.01)  # Wait for 1 
       #second

def loop():
    while True:
        push_sensor_data_to_firebase()
        #feed()
        #cleanSideNow()

loop()
