# using https://www.fivecreeks.org/monitor/sal.shtml calculation method


import math
from TempSensor import temp
from EC import read_ec_sensor

def round_value(val, places):
    """Rounds the value to the specified number of decimal places."""
    factor = 10 ** places
    return round(val * factor) / factor

def tempcond_to_sal(temp, cond):
    """Converts temperature and conductivity to salinity."""
    a0 = 0.008
    a1 = -0.1692
    a2 = 25.3851
    a3 = 14.0941
    a4 = -7.0261
    a5 = 2.7081

    b0 = 0.0005
    b1 = -0.0056
    b2 = -0.0066
    b3 = -0.0375
    b4 = 0.0636
    b5 = -0.0144

    c0 = 0.6766097
    c1 = 0.0200564
    c2 = 0.0001104259
    c3 = -0.00000069698
    c4 = 0.0000000010031

    if cond <= 0:
        return "Out of range"

    r = cond / 42914
    r /= (c0 + temp * (c1 + temp * (c2 + temp * (c3 + temp * c4))))

    r2 = math.sqrt(r)
    ds = b0 + r2 * (b1 + r2 * (b2 + r2 * (b3 + r2 * (b4 + r2 * b5))))
    ds *= ((temp - 15.0) / (1.0 + 0.0162 * (temp - 15.0)))

    sal = a0 + r2 * (a1 + r2 * (a2 + r2 * (a3 + r2 * (a4 + r2 * a5)))) + ds

    return round_value(sal, 2) #change this for rounding
    




# # User input test
# temperature = float(input("Enter water temperature (C): "))
# conductivity = float(input("Enter conductivity (uS/cm): "))

# temperature = temp()
# conductivity = read_ec_sensor()

# salinity = tempcond_to_sal(temperature, conductivity)
# print(f"Salinity: {salinity} ppt")

def realSalinity():
    temperature = temp()
    conductivity = read_ec_sensor()
    salinity = tempcond_to_sal(temperature, conductivity)
    return salinity
