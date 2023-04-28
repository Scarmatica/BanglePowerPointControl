import asyncio
from bleak import BleakScanner

#Scan efter BLE devices, som man kan connecte til
async def scan():
    devices = await BleakScanner.discover()
    for d in devices:
        print(d)
    return devices

asyncio.run(scan())